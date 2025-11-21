export async function handler(event, context) {
  try {
    const data = JSON.parse(event.body);

    const botToken = "7691027471:AAGbAAO4BUb56L-etqwBUWaNONdjymnyjaM";   // আপনার টেলিগ্রাম বট টোকেন দিন
    const chatId = "5893848641";       // আপনার টেলিগ্রাম চ্যাট আইডি দিন

    const message = `
🎯 নতুন লটারি রেজিস্ট্রেশন

👤 নাম: ${data.fullName}
📱 মোবাইল: ${data.phoneNumber}
📧 ইমেইল: ${data.email}
📍 ঠিকানা: ${data.address}
🏖️ গন্তব্য: ${data.destination}
⏰ সময়: ${data.timestamp}

✅ সম্মতি প্রদান করা হয়েছে
    `;

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML"
      }),
    });

    const result = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
