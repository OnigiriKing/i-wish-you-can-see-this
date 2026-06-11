import { Link } from "react-router-dom";

export default function GuidelinesComp() {
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
            Community Guidelines
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            A place for the messages unsent.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">
            This is a space for grief, love, memories, goodbyes, and messages
            you could not send. To keep it respectful and safe, please follow
            these guidelines.
          </p>
        </div>

        <div className="space-y-8 text-base leading-relaxed text-zinc-700">
          <section className="rounded-3xl border border-zinc-200 bg-zinc-50 px-6 py-6">
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              What you can leave here
            </h2>
            <p>
              You may leave a message for someone you lost, someone who left,
              someone you miss, or someone you can no longer reach. Messages can
              be emotional, personal, sad, loving, unfinished, or simple.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              Please do not post
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Private personal information about yourself or another person.
              </li>
              <li>
                Full names, addresses, phone numbers, emails, workplace details,
                or school details without permission.
              </li>
              <li>
                Threats, harassment, stalking, insults, or messages meant to
                shame someone.
              </li>
              <li>Hate speech, discrimination, or dehumanizing language.</li>
              <li>
                Sexual, graphic, violent, illegal, or exploitative content.
              </li>
              <li>
                Spam, advertising, links to scams, or repeated duplicate
                messages.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              Keep messages respectful
            </h2>
            <p>
              This place is for expression, not revenge. It is okay to write
              about pain, grief, confusion, or love. It is not okay to use this
              space to attack, expose, threaten, or pressure another person.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              Remember that messages are public
            </h2>
            <p>
              Messages left on the map may be visible to other visitors. Do not
              share anything you would not want strangers to read. If you write
              about a real person, avoid details that could identify or harm
              them.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              Moderation and removal
            </h2>
            <p>
              Messages that break these guidelines may be hidden, rejected, or
              removed. Reports may be reviewed manually. A message may also be
              removed if it creates risk for someone’s privacy, safety, or
              dignity.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              If you see something harmful
            </h2>
            <p>
              If a message contains private information, harassment, threats,
              hate, or harmful content, please report it or contact us. Include
              enough detail so the message can be found and reviewed.
            </p>
          </section>

          <section className="rounded-3xl border border-zinc-200 px-6 py-6">
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              If you are struggling
            </h2>
            <p>
              This space can bring up difficult feelings. If you feel unsafe,
              overwhelmed, or at risk of hurting yourself or someone else,
              please reach out to someone you trust, local emergency services,
              or a crisis support service in your country.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              Final note
            </h2>
            <p>
              This place is for expression, not revenge. Please be kind. Leave
              words that need a place to exist, not words meant to hurt someone
              else.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
