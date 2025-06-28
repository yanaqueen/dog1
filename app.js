const content = document.getElementById('content');

const pages = {
  home: `
    <section class="hero">
      <h2>🐾 יאנה ברגמן – אילוף כלבים מקצועי בגישה חיובית</h2>
      <p>מאמינה בקשר של אמון, אהבה והבנה. תוכניות אילוף מותאמות אישית, תוצאות מוכחות וחווית למידה מהנה לך ולכלב שלך.</p>
      <button onclick="navigate('contact')">קבעו שיחת ייעוץ חינם</button>
    </section>
  `,
  about: `
    <section>
      <h2>🐾 מי אני – יאנה ברגמן</h2>
      <p>שלום! אני יאנה ברגמן, מאלפת כלבים מוסמכת עם ניסיון של מעל 7 שנים. אני מתמחה בגישה חיובית ואמפתית שמכבדת את הצרכים של הכלב והמשפחה שלו. כל תוכנית אילוף מותאמת אישית, מתוך מטרה לבנות אמון וביטחון וליצור שגרה רגועה ונעימה בבית.</p>
      <p>עם עשרות משפחות מרוצות וכלבים מאושרים, אני מזמינה גם אתכם לצאת איתי למסע של שינוי אמיתי – באהבה והבנה.</p>
    </section>
  `,
  services: `
    <section>
      <h2>✔️ השירותים שלי</h2>
      <ul>
        <li><strong>אילוף אישי בבית הלקוח</strong> – תוכנית מותאמת אישית בהתאם לאופי הכלב והצרכים שלכם.</li>
        <li><strong>קורס קבוצתי</strong> – חוויה חברתית ומלמדת לכלב ולבעלים עם תמיכה מלאה לאורך כל הדרך.</li>
        <li><strong>תיקון בעיות התנהגות</strong> – פתרונות ממוקדים לפחדים, תוקפנות, הרס בבית ועוד.</li>
        <li><strong>ייעוץ לפני אימוץ</strong> – עזרה בבחירת הכלב המתאים והכנה נכונה לקבלתו בבית.</li>
      </ul>
    </section>
  `,
  testimonials: `
    <section>
      <h2>⭐ לקוחות ממליצים</h2>
      <blockquote>
        <p>״יאנה פשוט הצילה אותנו – הכלב שלנו היה פחדן ותוקפני, והיום הוא רגוע ומאושר. סבלנית ומקצועית ברמות.״</p>
        <footer>– יעל מ.</footer>
      </blockquote>
      <blockquote>
        <p>״יאנה מדהימה! הכלבה שלי למדה כל כך מהר – והמפגשים היו חוויה נעימה. ממליצה מכל הלב.״</p>
        <footer>– רונית ל.</footer>
      </blockquote>
      <blockquote>
        <p>״שירות מצוין, יחס אישי, והמון סבלנות ואהבה לכלב שלנו. ראינו שינוי כבר מהמפגש הראשון!״</p>
        <footer>– דני ש.</footer>
      </blockquote>
    </section>
  `,
  gallery: `
    <section>
  <h2>📸 גלריה – רגעים של הצלחה ואהבה</h2>
  <p>הצצה לתהליכי אילוף אמיתיים עם יאנה והחברים על ארבע 🐶</p>
  <div class="gallery">
    <img src="J1.jpg" alt="אילוף אישי עם יאנה" onclick="openLightbox(this.src, this.alt)">
    <img src="J2.jpg" alt="קורס קבוצתי" onclick="openLightbox(this.src, this.alt)">
    <img src="J3.jpg" alt="תיקון בעיות התנהגות" onclick="openLightbox(this.src, this.alt)">
    <img src="J4.jpg" alt="רגע של משחק ואמון" onclick="openLightbox(this.src, this.alt)">
    <img src="J5.jpg" alt="לפני ואחרי האילוף" onclick="openLightbox(this.src, this.alt)">
    <img src="J7.jpg" alt="שיעור חוץ" onclick="openLightbox(this.src, this.alt)">
  </div>
  <div id="lightbox" class="lightbox" onclick="closeLightbox()">
    <img id="lightbox-img" alt="">
    <p id="lightbox-caption"></p>
  </div>
</section>

  `,
  contact: `
  <section>
    <h2>📞 צור קשר עם יאנה ברגמן</h2>
    <p>מוזמנים לקבוע שיחת ייעוץ ראשונית ללא התחייבות. אשמח לשמוע על הכלב שלכם ולעזור לכם להתחיל תהליך חיובי.</p>
    <form id="contactForm">

      <div id="successMessage" class="success"></div>
      <label>שם מלא:
        <input type="text" id="name" required>
        <span class="error" id="nameError"></span>
      </label>
      <label>טלפון:
        <input type="tel" id="phone" required>
        <span class="error" id="phoneError"></span>
      </label>
      <label>הודעה:
        <textarea id="message" required></textarea>
        <span class="error" id="messageError"></span>
      </label>
      <button type="submit">שלח</button>
    </form>
    <p>📱 <strong>טלפון ישיר:</strong> <a href="tel:0545615060">054-5615060</a></p>
    <p>💬 <strong>שלח הודעה ב-WhatsApp:</strong> <a href="https://wa.me/972545615060" target="_blank">התחל שיחה</a></p>
    <p class="expand-link">
  🐾 רוצה להתחיל תהליך?
  <a href="#" onclick="loadDiagnosisForm()">מלא את טופס האבחון המלא</a>

</p>

<div id="diagnosisContainer" style="display: none;">
  <!-- ה-TOTAL FORM שלך מ-diagnosis.html נכנס פה אחד לאחד -->
  <form id="diagnosisForm" onsubmit="submitDiagnosisForm(event)">
    <h1>טופס אבחון ראשוני לכלב</h1>

        <h2>פרטי בעל הכלב</h2>
    <label>שם מלא <input type="text" name="owner_name" required></label>
    <label>טלפון ליצירת קשר <input type="tel" name="owner_phone" required></label>
    <label>אימייל <input type="email" name="owner_email"></label>

    <label>שם הכלב <input type="text" name="dog_name"></label>
    <label>מין הכלב 
      <select name="gender">
        <option>זכר</option>
        <option>נקבה</option>
      </select>
    </label>
    <label>סוג הכלב <input type="text" name="breed"></label>
    <label>גיל הכלב <input type="text" name="age"></label>
    <label>משקל הכלב <input type="text" name="weight"></label>
    <label>מסורס / לא מסורס 
      <select name="neutered">
        <option>מסורס</option>
        <option>לא מסורס</option>
      </select>
    </label>
    <label>באיזה גיל הכלב אצלך <input type="text" name="age_with_owner"></label>
    <label>האם בחרת\מצאת את הכלב 
      <select name="origin">
        <option>בחרתי</option>
        <option>מצאתי</option>
      </select>
    </label>
    <label>מגורים 
      <select name="residence">
        <option>בית</option>
        <option>גינה</option>
        <option>דירת שותפים</option>
      </select>
    </label>
    <label>האם יש בעלי חיים נוספים בבית? פרט <textarea name="other_animals"></textarea></label>
    <label>כמה טיולים ביום הוא מקבל <input type="text" name="walks_per_day"></label>
    <label>סוג פעילות שהכלב מקבל ביום יום <textarea name="activities"></textarea></label>
    <label>מי הווטרינר <input type="text" name="vet"></label>
    <label>האם יש בעיות רפואיות <textarea name="medical_issues"></textarea></label>
    <label>פירוט בעיות התנהגות בהן תרצה לטפל <textarea name="behavior_issues"></textarea></label>
    <label>האם עבר אילוף מקצועי בעבר 
      <select name="trained_before">
        <option>כן</option>
        <option>לא</option>
      </select>
    </label>

    <div class="section-title">סמן התנהגויות:</div>
    <div class="checkbox-group">
      <label><input type="checkbox" name="behavior" value="חרדות"> חרדות</label>
      <label><input type="checkbox" name="behavior" value="חרדות נטישה"> חרדות נטישה</label>
      <label><input type="checkbox" name="behavior" value="הריסת חפצים"> הרס בית וחפצים</label>
      <label><input type="checkbox" name="behavior" value="תוקפנות לכלבים"> תוקפנות לכלבים</label>
      <label><input type="checkbox" name="behavior" value="תוקפנות לאנשים"> תוקפנות לאנשים</label>
      <label><input type="checkbox" name="behavior" value="קפיצות על אורחים"> קפיצות על אורחים בבית</label>
      <label><input type="checkbox" name="behavior" value="נשיכות בטיולים"> נשיכות בטיולים</label>
      <label><input type="checkbox" name="behavior" value="נשיכות מתוך משחק"> נשיכות מתוך משחק</label>
      <label><input type="checkbox" name="behavior" value="נביחות\יללות בעת עזיבת הבית"> נביחות\יללות בעת עזיבת הבית</label>
      <label><input type="checkbox" name="behavior" value="צרכים בבית"> צרכים בבית</label>
      <label><input type="checkbox" name="behavior" value="חפירת בורות"> חפירת בורות</label>
      <label><input type="checkbox" name="behavior" value="אכילת אוכל שלך"> תחנונים ורצון לאכול מהאוכל שלך</label>
    </div>
    <label>התנהגויות נוספות שתרצה לציין <textarea name="other_behavior"></textarea></label>

    <div class="section-title">אילו פקודות חשוב לך ללמד את הכלב:</div>
    <div class="checkbox-group">
      <label><input type="checkbox" name="commands" value="רגלי"> רגלי</label>
      <label><input type="checkbox" name="commands" value="אליי"> אליי</label>
      <label><input type="checkbox" name="commands" value="שב"> שב</label>
      <label><input type="checkbox" name="commands" value="ארצה"> ארצה</label>
      <label><input type="checkbox" name="commands" value="למקום"> למקום</label>
      <label><input type="checkbox" name="commands" value="יד"> יד</label>
      <label><input type="checkbox" name="commands" value="UP"> UP</label>
      <label><input type="checkbox" name="commands" value="עמידה על 2 רגליים"> לעמוד על 2 רגליים</label>
    </div>
    <label>פקודות נוספות שתרצה ללמד <textarea name="other_commands"></textarea></label>
    <label>האם הכלב נשך בעבר אדם? במידה וכן פרט על המקרה <textarea name="bite_incident"></textarea></label>
    <label>ספר מה אתה אוהב בכלב שלך <textarea name="dog_love"></textarea></label>
    <label>מה חשוב לך ומה ייחשב מבחינתך לאילוף מוצלח <textarea name="success_definition"></textarea></label>
    <label>תאר לי כיצד אתה רואה את הכלב לאחר האילוף <textarea name="after_training"></textarea></label>
    <label>הערות נוספות <textarea name="notes"></textarea></label>
    <button type="submit">שלח אבחון</button>
  </form>
</div>


  </section>
`




};

function navigate(page) {
  content.innerHTML = pages[page] || pages.home;
  window.scrollTo(0, 0);
}


function openLightbox(src, alt) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox-caption').textContent = alt;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function toggleMenu() {
  document.getElementById('menu').classList.toggle('show');
}

document.addEventListener('submit', async (e) => {
  if (e.target.id !== 'contactForm') return;
  e.preventDefault();

  // איסוף ערכים
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  let valid = true;

  document.getElementById('nameError').textContent = '';
  document.getElementById('phoneError').textContent = '';
  document.getElementById('messageError').textContent = '';
  document.getElementById('successMessage').style.display = 'none';

  if (name === '') {
    document.getElementById('nameError').textContent = 'נא להזין שם מלא';
    valid = false;
  }

  if (!/^[0-9]{9,10}$/.test(phone)) {
    document.getElementById('phoneError').textContent = 'מספר טלפון לא תקין';
    valid = false;
  }

  if (message === '') {
    document.getElementById('messageError').textContent = 'נא להזין הודעה';
    valid = false;
  }

  if (!valid) return;

  // שליחה ל-Formspree עם JSON
  try {
    const response = await fetch('https://formspree.io/f/mzzgyvbr', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        שם: name,
        טלפון: phone,
        הודעה: message
      })
    });

    if (response.ok) {
      document.getElementById('successMessage').textContent = '✅ תודה! ההודעה נשלחה בהצלחה. נחזור אליך בהקדם.';
      document.getElementById('successMessage').style.display = 'block';
      document.getElementById('contactForm').reset();
    } else {
      document.getElementById('successMessage').textContent = '⚠️ שגיאה בשליחה. נסה שוב מאוחר יותר.';
      document.getElementById('successMessage').style.display = 'block';
    }
  } catch (error) {
    document.getElementById('successMessage').textContent = '⚠️ שגיאה בחיבור. נסה שוב.';
    document.getElementById('successMessage').style.display = 'block';
  }
});


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker Registered'));
}

async function loadDiagnosisForm() {
  const container = document.getElementById('diagnosisContainer');
  if (container.innerHTML.trim() !== '') {
    container.style.display = container.style.display === 'none' ? 'block' : 'none';
    return;
  }

  const response = await fetch('diagnosis.html');
  const html = await response.text();
  container.innerHTML = html;
  container.style.display = 'block';

  attachDiagnosisFormHandler(); // 👈 כאן הפתרון
}



const FORMSPREE_URL = 'https://formspree.io/f/xpwrklpy'; // כתובת ה-Formspree שלך

document.addEventListener('submit', async (e) => {
  if (e.target.id !== 'diagnosisForm') return;
  e.preventDefault();

  // ניקוי הודעה קיימת
  document.getElementById('successMessage').style.display = 'none';
  document.getElementById('successMessage').textContent = '';

  const entries = collectDiagnosisFormEntries();

  try {
    const response = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entries)
    });

    if (response.ok) {
      document.getElementById('successMessage').textContent = '✅ הטופס נשלח בהצלחה! נחזור אליך בהקדם.';
      document.getElementById('successMessage').style.display = 'block';
      document.getElementById('diagnosisForm').reset();
      window.scrollTo(0, 0);
    } else {
      document.getElementById('successMessage').textContent = '⚠️ שגיאה בשליחת הטופס. נסה שוב מאוחר יותר.';
      document.getElementById('successMessage').style.display = 'block';
    }
  } catch (error) {
    document.getElementById('successMessage').textContent = '⚠️ בעיה בחיבור. נסה שוב מאוחר יותר.';
    document.getElementById('successMessage').style.display = 'block';
  }
});

function collectDiagnosisFormEntries() {
  const form = document.getElementById('diagnosisForm');
  const data = new FormData(form);

  const labels = {
    owner_name: 'שם בעל הכלב',
    owner_phone: 'טלפון ליצירת קשר',
    owner_email: 'אימייל',
    dog_name: 'שם הכלב',
    gender: 'מין הכלב',
    breed: 'סוג הכלב',
    age: 'גיל הכלב',
    weight: 'משקל הכלב',
    neutered: 'מסורס / לא מסורס',
    age_with_owner: 'באיזה גיל הכלב אצלך',
    origin: 'האם בחרת/מצאת את הכלב',
    residence: 'מגורים',
    other_animals: 'בעלי חיים נוספים בבית',
    walks_per_day: 'מספר טיולים ביום',
    activities: 'סוג פעילות יומית',
    vet: 'הווטרינר',
    medical_issues: 'בעיות רפואיות',
    behavior_issues: 'בעיות התנהגות',
    trained_before: 'עבר אילוף מקצועי',
    behavior: 'התנהגויות',
    other_behavior: 'התנהגויות נוספות',
    commands: 'פקודות חשובות',
    other_commands: 'פקודות נוספות',
    bite_incident: 'נשיכה בעבר',
    dog_love: 'מה אתה אוהב בכלב שלך',
    success_definition: 'מה נחשב לאילוף מוצלח',
    after_training: 'איך תראה את הכלב לאחר האילוף',
    notes: 'הערות נוספות'
  };

  const entries = {};

  // מילוי רגיל
  for (let [key, value] of data.entries()) {
    if (!entries[labels[key]]) {
      entries[labels[key] || key] = value;
    }
  }

  // איסוף ערכים מרובים (checkbox)
  const behaviorBoxes = form.querySelectorAll('input[name="behavior"]:checked');
  const behaviors = Array.from(behaviorBoxes).map(cb => cb.value);
  entries['התנהגויות'] = behaviors.join(', ');

  const commandBoxes = form.querySelectorAll('input[name="commands"]:checked');
  const commands = Array.from(commandBoxes).map(cb => cb.value);
  entries['פקודות חשובות'] = commands.join(', ');

  return entries;
}





function attachDiagnosisFormHandler() {
  const form = document.getElementById('diagnosisForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const successDiv = document.getElementById('successMessage');
    successDiv.style.display = 'none';
    successDiv.textContent = '';

    const entries = collectDiagnosisFormEntries();

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(entries)
      });

      if (response.ok) {
        successDiv.textContent = '✅ הטופס נשלח בהצלחה! נחזור אליך בהקדם.';
        successDiv.style.display = 'block';
        form.reset();
        window.scrollTo(0, 0);
      } else {
        successDiv.textContent = '⚠️ שגיאה בשליחת הטופס. נסה שוב מאוחר יותר.';
        successDiv.style.display = 'block';
      }
    } catch (error) {
      successDiv.textContent = '⚠️ בעיה בחיבור. נסה שוב מאוחר יותר.';
      successDiv.style.display = 'block';
    }
  });
}









// Load home page by default
navigate('home');
