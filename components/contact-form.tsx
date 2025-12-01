"use client";

import { FormEvent, useMemo, useState } from "react";
import { Button } from "./button";

type FormStatus = "idle" | "submitting" | "success" | "error";

const budgets = ["$3k - $8k", "$8k - $20k", "$20k+", "Not sure yet"];

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const statusMessage = useMemo(() => {
    if (status === "success") {
      return "Thanks! I received your message and will reply within one business day.";
    }
    if (status === "error") {
      return "Something went wrong. Please try again or email robby@appsbyrobby.com.";
    }
    return "";
  }, [status]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("form-name", "contact");

    setStatus("submitting");
    try {
      const encoded = new URLSearchParams();
      formData.forEach((value, key) => {
        encoded.append(key, String(value));
      });

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encoded.toString(),
      });

      form.reset();
      setMessage("");
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="space-y-5"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" readOnly />
        </label>
      </p>
      <div>
        <label className="block text-sm font-medium text-slate-800 dark:text-slate-200">
          Name
        </label>
        <input
          required
          name="name"
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-800 dark:text-slate-200">
          Email
        </label>
        <input
          required
          type="email"
          name="email"
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-800 dark:text-slate-200">
          Project budget
        </label>
        <select
          name="budget"
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50"
        >
          {budgets.map((budget) => (
            <option key={budget}>{budget}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-800 dark:text-slate-200">
          What are you building?
        </label>
        <textarea
          required
          name="message"
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50"
          placeholder="Share goals, timeline, and any links you have."
        />
      </div>
      <div className="flex items-center gap-3">
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Send message"}
        </Button>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Or email{" "}
          <a
            className="font-semibold text-sky-600 dark:text-sky-300"
            href="mailto:robby@appsbyrobby.com"
          >
            robby@appsbyrobby.com
          </a>
        </p>
      </div>
      {statusMessage ? (
        <p
          className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
          role="status"
        >
          {statusMessage}
        </p>
      ) : null}
    </form>
  );
}
