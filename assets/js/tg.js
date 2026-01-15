
function send_telegram_message(message){
	tok = '8258985277:AAE_8iMjFA5DkPQOUE1c9y61YmKvc9_Bye8'
	chatId = '6969224682'


      fetch(`https://api.telegram.org/bot${tok}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          disable_notification: false
        })
      });


	//       return fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       chat_id: chatId,
    //       text: message,
    //       disable_notification: false
    //     })
    //   });
    // })
    // .then(res => res.json())
    // .then(resJson => {
    //   if (resJson.ok) {
    //     console.log("✅ تم إرسال الإشعار إلى تليجرام بنجاح.");
    //     sessionStorage.setItem("telegramSent", "true"); // منع التكرار خلال الجلسة
    //   } else {
    //     console.log("❌ فشل إرسال الإشعار:", resJson);
    //   }
    // })
    // .catch(err => {
    //   console.log("⚠️ خطأ أثناء الإرسال أو جلب الدولة:", err);
    // });
}