export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/XXXXXXX"
      method="POST"
      className="space-y-4"
    >
      <input
        type="text"
        name="name"
        placeholder="نام"
        required
        className="w-full p-3 rounded bg-gray-200 dark:bg-slate-800"
      />
      <input
        type="email"
        name="email"
        placeholder="ایمیل"
        required
        className="w-full p-3 rounded bg-gray-200 dark:bg-slate-800"
      />
      <textarea
        name="message"
        placeholder="پیام"
        rows="5"
        required
        className="w-full p-3 rounded bg-gray-200 dark:bg-slate-800"
      ></textarea>

      <button
        type="submit"
        className="px-6 py-2 bg-primary text-white rounded"
      >
        ارسال پیام
      </button>
    </form>
  )
}
