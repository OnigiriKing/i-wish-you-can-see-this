import { useState } from "react";
import { Link } from "react-router-dom";
import type { SubmitEvent } from "react";

export default function ContactComp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isSubmitDisabled =
    name.trim() === "" ||
    email.trim() === "" ||
    subject.trim() === "" ||
    message.trim() === "";

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitDisabled) return;

    const contactMessage = {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    console.log(contactMessage);

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setIsSubmitted(true);
  }

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
            Contact
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Get in touch.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">
            Use this page for questions, feedback, reports, or removal requests.
            If something on the map feels harmful or private, please include
            enough detail so it can be found and reviewed.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <section className="rounded-3xl border border-zinc-200 bg-zinc-50 px-6 py-6 text-base leading-relaxed text-zinc-700">
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              Before you send
            </h2>
            <p>
              For reports or removal requests, please mention what the message
              says, who it is addressed to, or where it appears on the map.
            </p>
            <p className="mt-4">
              This form is not for crisis support. If you feel unsafe or at risk
              of hurting yourself or someone else, please contact local
              emergency services or a crisis support service in your country.
            </p>
          </section>

          <form
            className="rounded-3xl border border-zinc-200 px-6 py-6 shadow-sm"
            onSubmit={handleSubmit}
          >
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">
                  Name
                </label>
                <input
                  className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 outline-none transition focus:border-zinc-400"
                  type="text"
                  placeholder="Your name"
                  maxLength={50}
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">
                  Email
                </label>
                <input
                  className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 outline-none transition focus:border-zinc-400"
                  type="email"
                  placeholder="you@example.com"
                  maxLength={100}
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">
                  Subject
                </label>
                <input
                  className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 outline-none transition focus:border-zinc-400"
                  type="text"
                  placeholder="Question, report, or removal request"
                  maxLength={120}
                  required
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">
                  Message
                </label>
                <textarea
                  className="min-h-40 w-full resize-none rounded-2xl border border-zinc-200 bg-white px-4 py-3 leading-relaxed outline-none transition focus:border-zinc-400"
                  placeholder="Write your message here..."
                  maxLength={1000}
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitDisabled}
                className={`w-full rounded-full px-5 py-3 font-medium transition ${
                  isSubmitDisabled
                    ? "cursor-not-allowed bg-zinc-200 text-zinc-400"
                    : "cursor-pointer bg-zinc-950 text-white hover:bg-zinc-800"
                }`}
              >
                Send message
              </button>

              {isSubmitted && (
                <p className="text-center text-sm text-zinc-500">
                  Thank you. Your message has been received.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}