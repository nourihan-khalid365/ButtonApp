function changeMessage() {
                  const messageElement = document.getElementById("message");
                  const descriptionElement = document.getElementById("description");

                  // تغيير نص الرسالة والوصف
                  messageElement.innerHTML = "تم تغيير الرسالة بنجاح!";
                  descriptionElement.innerHTML = "تم تحديث الرسالة بنجاح! يمكنك إعادة تعيينها إذا رغبت.";

                  // تغيير لون النص وتأثير التكبير
                  messageElement.style.color = "#4CAF50";
                  messageElement.style.transform = "scale(1.2)";

                  // تغيير لون خلفية الصفحة
                  document.body.style.backgroundColor = "#e8f5e9";
              }

              function resetMessage() {
                  const messageElement = document.getElementById("message");
                  const descriptionElement = document.getElementById("description");

                  // إعادة النص الأصلي
                  messageElement.innerHTML = "مرحبا بك في صفحتنا!";
                  descriptionElement.innerHTML = "اضغط على الزر لتغيير الرسالة وإضافة بعض التأثيرات البصرية.";

                  // إعادة التنسيقات الأصلية
                  messageElement.style.color = "#00796B";
                  messageElement.style.transform = "scale(1)";
                  document.body.style.backgroundColor = "#f0f8ff";
              }
