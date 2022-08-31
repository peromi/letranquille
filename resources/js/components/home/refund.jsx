import React from 'react'
import HomeContainer from './HomeContainer'


function RefundPolicy() {
  return (
    <HomeContainer>
    {/* banner */}
<div className='h-[154px] flex flex-col justify-center items-center '>
<h1 className='text-6xl font-bold'>Refund Policy</h1>
</div>
{/* content */}
<div className="w-8/12 mx-auto mb-4">

<p>Customer satisfaction is always our first priority. If you are not completely satisfied with the service then please contact our customer service team and let us know. If we are unable to rectify any problems to your complete satisfaction then we will either credit additional time to your membership or refund your membership fee subject to the following conditions.</p>

<p className="mt-2">We will issue a full refund under the following circumstances: -
</p>

<ul>
    <ol className='font-bold'>1. The member's account is experiencing technical problems</ol>
    <ol className='font-bold'>2. Our site has been unavailable for an unacceptable time period, or has been experiencing technical problems which have impaired a member's ability to use his or her membership</ol>
    <ol className='font-bold'>3.The member requests a refund prior to initiating or receiving contact with any members</ol>
</ul>

<p className='mt-2'>We may, at our discretion, give refunds to members for various other reasons. If you are applying for a discretionary refund, please provide a detailed explanation of why you believe you are entitled to a refund.</p>
<h1 className="font-bold text-2xl my-2">Partial refunds for unused time
</h1>
<p>There are no partial refunds for unused time. We will only issue a refund for unused time if you have not commenced using our service and have not initiated contact or received contact from other members.</p>

</div>
</HomeContainer>
  )
}

export default RefundPolicy
