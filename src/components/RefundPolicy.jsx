import React from "react";

export default function RefundPolicy() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl font-bold mb-6 text-blue-800">Refund Policy</h1>
        <p className="text-gray-700 mb-4">
          Bytebub strives to deliver the highest quality services. Refunds are handled based on project stage and agreement.
        </p>
        <ol className="list-decimal list-inside text-gray-700 space-y-3">
          <li><strong>Project Cancellation:</strong> Full refund of advance (minus transaction charges) if cancelled before work starts. Partial refund may apply if project has commenced.</li>
          <li><strong>No Refund Conditions:</strong> After project completion, delays caused by client, ongoing AMC, or third-party services are non-refundable.</li>
          <li><strong>Service Modification:</strong> Dissatisfied clients will receive reasonable revisions before considering refund.</li>
          <li><strong>Refund Timeline:</strong> Approved refunds processed within 7–14 business days to original payment method.</li>
          <li><strong>Contact:</strong> Email <a href="mailto:support@bytebub.com" className="text-blue-600">support@bytebub.com</a> to request refunds or discuss cancellations.</li>
        </ol>
      </div>
    </section>
  );
}
