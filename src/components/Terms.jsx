import React from "react";

export default function Terms() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl font-bold mb-6 text-blue-800">Terms and Conditions</h1>
        <p className="text-gray-700 mb-4">
          Welcome to Bytebub (“Company”, “we”, “our”, “us”). By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions. Please read carefully.
        </p>
        <ol className="list-decimal list-inside text-gray-700 space-y-3">
          <li><strong>General:</strong> These terms govern your use of our website, products, and services. If you do not agree, do not use our services.</li>
          <li><strong>Services:</strong> We provide software development, website development, AMC, API integrations, and related IT solutions. Scope, deliverables, and timelines are defined in proposals or agreements.</li>
          <li><strong>Payments:</strong> Payments follow milestones. Work starts after initial payment. Final deliverables are released after full payment.</li>
          <li><strong>Project Timelines:</strong> Timelines are mutually agreed. Delays caused by client or unforeseen issues are not our responsibility.</li>
          <li><strong>Intellectual Property:</strong> Clients own final deliverables after full payment. Non-confidential work may be showcased in our portfolio.</li>
          <li><strong>Confidentiality:</strong> Client data is confidential and not shared without consent, except as required by law.</li>
          <li><strong>Limitation of Liability:</strong> Bytebub is not responsible for indirect or incidental losses. Liability limited to amount paid for service.</li>
          <li><strong>Third-Party Services:</strong> We may use third-party tools/plugins. Bytebub is not responsible for any issues arising from them.</li>
          <li><strong>Modification of Terms:</strong> Terms may be updated at any time. Continued use implies acceptance.</li>
          <li><strong>Governing Law:</strong> Laws of India apply; disputes under courts in [Your City, India].</li>
        </ol>
      </div>
    </section>
  );
}
