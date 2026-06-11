import { Link } from "react-router-dom";

export default function LegalComp() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-white px-6 py-16 text-zinc-900">
      <section className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="mb-8 inline-flex text-sm font-medium text-zinc-500 transition hover:text-zinc-900"
        >
          ← Back to map
        </Link>

        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-400">
            Legal
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Privacy, terms, and disclaimer.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">
            This page explains how this website works, what information may be
            collected, and what you agree to when using it.
          </p>
        </div>

        <div className="space-y-8 text-base leading-relaxed text-zinc-700">
          <section className="rounded-3xl border border-zinc-200 bg-zinc-50 px-6 py-6">
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              About this website
            </h2>
            <p>
              This website is a public space for unsent messages, memories,
              grief, love, and words people could not say directly. It is made
              for expression and reflection, not for private communication.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              Public messages
            </h2>
            <p>
              Messages submitted to the map may be visible to other visitors.
              Please do not post anything private, identifying, harmful, or
              anything you would not want strangers to read. If you write about
              a real person, avoid details that could identify or harm them.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              Information we may collect
            </h2>
            <p>
              When you leave a message, the website may store the text you
              submit, the names or labels you enter, the selected map location,
              and the date the message was created. If you contact us, we may
              store the information you provide so we can respond.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              How information is used
            </h2>
            <p>
              Submitted messages are used to display content on the map and to
              keep the website working. Contact information is used only to
              respond to messages, reports, or removal requests. We do not sell
              personal information.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              Moderation and removal
            </h2>
            <p>
              Messages may be reviewed, hidden, rejected, or removed if they
              break the community guidelines, contain private information, or
              create risk for someone’s privacy, safety, or dignity. Reports
              may be reviewed manually.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              User responsibility
            </h2>
            <p>
              By using this website, you agree not to post harassment, threats,
              hate, private personal information, illegal content, spam, or
              content meant to harm another person. You are responsible for the
              messages you submit.
            </p>
          </section>

          <section className="rounded-3xl border border-zinc-200 px-6 py-6">
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              Not professional or crisis support
            </h2>
            <p>
              This website is not therapy, counseling, medical advice, legal
              advice, or emergency support. If you feel unsafe, overwhelmed, or
              at risk of hurting yourself or someone else, please contact a
              trusted person, local emergency services, or a crisis support
              service in your country.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              Availability and changes
            </h2>
            <p>
              This website may change, pause, remove features, or become
              unavailable at any time. These legal notes may also be updated as
              the website develops.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              Contact
            </h2>
            <p>
              For questions, reports, or removal requests, please use the
              contact page. Include enough detail so the relevant message or
              issue can be found and reviewed.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}