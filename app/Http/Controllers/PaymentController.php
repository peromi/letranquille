<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Illuminate\Http\Request;
use Omnipay\Omnipay;


class PaymentController extends Controller
{
    private $gateway;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->gateway = Omnipay::create('PayPal_Rest');
        $this->gateway->setClientId(env('PAYPAL_CLIENT_ID'));
        $this->gateway->setSecret(env('PAYPAL_CLIENT_SECRET'));
        $this->gateway->setTestMode(true);
    }
    public function pay(Request $request)
    {
         try{
            $response = $this->gateway->purchase(array(
                'amount' => $request->amount,
                'currency' => env("PAYPAL_CURRENCY"),
                'description'   => $request->input('description'),
                'returnUrl' => url("/api/success"),
                'cancelUrl' => url("/api/error")
            ))->send();

            if($response->isRedirect()){
                $response->redirect();
            }else{
               return $response->getMessage();
            }

         }catch(\Throwable $th){
            return $th->getMessage();
         };
    }

    public function success(Request $request){
        if($request->input('paymentId') && $request->input('PayerID')){
            $transaction = $this->gateway->completePurchase(array(
                "payer_id" => $request->input('PayerID'),
                "transactionReference" => $request->input('paymentId')
            ));

            $response = $transaction->send();

            if($response->isSuccessful()){
                $arr = $response->getData();

                $payment = new Payment();
                $payment->user_id = auth()->user()->id;
                $payment->payment_id = $arr['id'];
                $payment->plan_type = "test";
                $payment->email = $arr['payer']['payer_info']['email'];
                $payment->duration = 90;
                $payment->amount = $arr['transactions'][0]['amount']['total'];
                $payment->credit = 5000;
                $payment->currency = env('PAYPAL_CURRENCY');
                $payment->status = $arr['state'];

                $payment->save();


                return response(['message' => "Payment is successful."], 201);
            }else{
                return response(['message' => $response->getMessage()], 301);
            }
        }
    }


    public function error(){
        return response(['message' => "User declined the payment."]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function show(Payment $payment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function edit(Payment $payment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Payment $payment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Payment $payment)
    {
        //
    }
}
