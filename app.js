const content = document.getElementById('content');

const pages = {
  home: `
  <h2 style="font-size: 1rem; margin-bottom: 1rem; color: var(--accent);">🐾 יאנה ברגמן – אילוף כלבים מקצועי וממוקד מטרה</h2>
<section class="hero">
  <p>תהליך אילוף מקצועי ומדויק המבוסס על ניתוח התנהגותי והתאמה אישית של תוכנית העבודה. המטרה היא לשפר את התקשורת ביניכם לבין הכלב ולאפשר ניהול ברור ויעיל של ההתנהגות בבית ובחוץ.</p>
  <button onclick="navigate('contact')">לתיאום שיחת ייעוץ</button>
</section>

  `,
  about: `
<section>
  <h2>🐾 מי אני – יאנה ברגמן</h2>

  <p>שמי יאנה ברגמן ואני עוסקת באילוף כלבים במטרה לאפשר לבעלים ולכלב שלהם לפתח מערכת תקשורת ברורה ומובנת. האילוף מתמקד בזיהוי הצרכים הספציפיים של הכלב והתאמת תוכנית עבודה מדויקת לכל מקרה.</p>

  <p>כל תוכנית נבנית באופן פרטני בהתאם לאופי הכלב ולסביבת המחיה שלו, במטרה לפתור בעיות התנהגות קיימות ולייצר שגרה יציבה וברורה. התהליך כולל תרגול של כללים והרגלים בבית ובחוץ, ומתבצע תוך שיתוף מלא של כל בני הבית כדי להבטיח יישום אחיד ועקבי.</p>

  <p>המטרה היא להקנות לבעלים את הכלים הדרושים לניהול הכלב בצורה בטוחה ומסודרת – כולל קביעת גבולות ברורים, תרגול פקודות בסיסיות והבנה של גורמי הבעיה. התהליך מתוכנן כך שיאפשר לבעלי הכלב להתמודד עם האתגרים השונים באופן עצמאי גם לאחר סיום הליווי.</p>

  <p>אני רואה באילוף תהליך מובנה עם מטרות ברורות, שמטרתו לאפשר חיים משותפים מסודרים יותר, הפחתת בעיות התנהגות ושיפור איכות החיים של הכלב ובעליו.</p>
</section>
`,
services: `
<section>
  <h2>✔️ השירותים שלי</h2>
  <ul class="service-list">

<li>
  <button class="service-toggle" onclick="toggleServiceDetails('personalTraining')">
  🐶 אילוף אישי בבית הלקוח <span class="arrow">▼</span>
</button>
  <div id="personalTraining" class="service-details" style="display:none;">
    <h3>🐶 אילוף כלבים בבית הלקוח – תהליך ממוקד ומבוסס ניתוח סביבה</h3>
    <p>
      אילוף בבית הלקוח מיועד לטיפול ישיר וממוקד בבעיות שמופיעות בסביבה היומיומית של הכלב. השירות מתבסס על אבחון התנאים הביתיים והחיצוניים, ניתוח מקורות הבעיה ובנייה של תוכנית עבודה שיטתית המבוססת על כללים ברורים ותרגול עקבי. המפגשים מתקיימים בבית ובשכונה, במטרה להבטיח מענה אמיתי לאתגרים בסביבה שבה הכלב חי.
    </p>
    <h4>⭐ יתרונות הגישה הביתית</h4>
    <ul>
      <li><strong>אבחון בסביבה הטבעית</strong> – זיהוי ודאי של הגורמים להתנהגויות הבעייתיות.</li>
      <li><strong>התאמה מלאה למבנה הבית והמשפחה</strong> – קביעת נהלים שמתחשבים בדינמיקה המשפחתית.</li>
      <li><strong>פתרון בעיות במקום שבו הן קורות</strong> – יישום תרגולים מעשיים בתרחישים אמיתיים.</li>
      <li><strong>חיסכון לוגיסטי</strong> – אין צורך בהובלה למתקן חיצוני או בהשתתפות בקבוצות לא רלוונטיות.</li>
    </ul>
    <h4>✔️ נושאים וקשיים שמטופלים</h4>
    <ul>
      <li>✅ משיכות ברצועה</li>
      <li>✅ נביחות מופרזות בבית או על אורחים</li>
      <li>✅ קפיצות והפרת גבולות</li>
      <li>✅ טיפול בבעיות צרכים והטמעת סדר יום ברור</li>
      <li>✅ ניהול מצבי חרדה ותוקפנות</li>
    </ul>
    <h4>📌 מבנה השירות</h4>
    <p>
      התהליך כולל שלב אבחון מקיף, קביעת מטרות ברורות, תרגול שיטתי והדרכה פרטנית לכל בני הבית. כל מפגש נועד לאפשר יישום מיידי של כללים והטמעת הרגלים חדשים באופן שמותאם לצרכים האישיים של הכלב והמשפחה.
    </p>
  </div>
</li>

<li>
  <button class="service-toggle" onclick="toggleServiceDetails('behaviorFix')">
  🦴 תיקון בעיות התנהגות <span class="arrow">▼</span>
</button>
  <div id="behaviorFix" class="service-details" style="display:none;">
    <h3>🦴 טיפול בבעיות התנהגות – ניתוח מקצועי ותוכנית עבודה מותאמת</h3>
    <p>
      השירות מתמקד בזיהוי הסיבות השורשיות להתנהגויות לא רצויות ובמתן פתרונות מעשיים ומובנים. מטרת התהליך היא לספק לבעלי הכלב כלים לניהול ברור של מצבים מאתגרים ולשיפור ההתנהלות היומיומית. העבודה מבוססת על ניתוח דפוסי התנהגות, הערכת גורמי סיכון ובנייה של תוכנית הדרגתית לפתרון הבעיה.
    </p>
    <h4>⭐ שלבי העבודה</h4>
    <ul>
      <li><strong>אבחון מלא</strong> – הגדרת מקור הבעיה בהתבסס על התנהגות, סביבה והרגלים קיימים.</li>
      <li><strong>בניית תוכנית עבודה</strong> – פירוק הבעיה לגורמים ותכנון שלבים לטיפול ממוקד.</li>
      <li><strong>הדרכה ישירה</strong> – מתן הנחיות ברורות לתרגול בבית ובחוץ.</li>
      <li><strong>מעקב והערכה</strong> – בדיקת התקדמות והתאמת התוכנית במידת הצורך.</li>
    </ul>
    <h4>✔️ בעיות נפוצות שמטופלות</h4>
    <ul>
      <li>✅ נביחות בלתי פוסקות</li>
      <li>✅ תוקפנות כלפי כלבים או בני אדם</li>
      <li>✅ חרדת נטישה</li>
      <li>✅ בעיות צרכים בבית</li>
      <li>✅ הרס חפצים וריהוט</li>
      <li>✅ קפיצות והתרגשות יתר</li>
    </ul>
    <h4>📌 מטרת השירות</h4>
    <p>
      לאפשר לבעלי הכלב לנהל את ההתנהגות בצורה ברורה ואחראית, להפחית מצבי קונפליקט ולייצר מסגרת התנהגותית יציבה וניתנת ליישום לאורך זמן.
    </p>
  </div>
</li>

<li>
  <button class="service-toggle" onclick="toggleServiceDetails('routineTraining')">
  📋 ליווי בהטמעת כללים וסדר יום <span class="arrow">▼</span>
</button>
  <div id="routineTraining" class="service-details" style="display:none;">
    <h3>📋 ליווי בהטמעת כללים וסדר יום ברור</h3>
    <p>
      מיועד לבניית מערכת כללים ברורה והטמעת שגרה מסודרת בבית. השירות כולל ניתוח הרגלים בעייתיים, הגדרת נהלים מותאמים והדרכה ליישום עקבי עם כל בני הבית.
    </p>
    <h4>⭐ יתרונות השירות</h4>
    <ul>
      <li><strong>אבחון דפוסי התנהגות</strong> – זיהוי הרגלים בעייתיים והתאמת מענה מותאם.</li>
      <li><strong>בניית שגרה ברורה</strong> – קביעת זמני פעילות והגדרת גבולות ברורים.</li>
      <li><strong>הדרכה למשפחה כולה</strong> – יישום אחיד והטמעה עקבית לכל בני הבית.</li>
      <li><strong>ניהול מצבים חוזרים</strong> – פתרונות מעשיים לאתגרים יומיומיים.</li>
    </ul>
    <h4>📌 מטרת השירות</h4>
    <p>
      לאפשר ניהול מסודר וברור של הכלב בבית, להפחית בעיות התנהגות ולייצר שגרה יציבה המותאמת לאורח החיים של המשפחה.
    </p>
  </div>
</li>

<li>
  <button class="service-toggle" onclick="toggleServiceDetails('followUpTraining')">
  🔎 שירות מעקב והדרכה מתקדמת <span class="arrow">▼</span>
</button>
  <div id="followUpTraining" class="service-details" style="display:none;">
    <h3>🔎 שירות מעקב והדרכה מתקדמת</h3>
    <p>
      שירות המשך שמיועד להבטיח יישום יעיל של תוכנית האילוף לאורך זמן. כולל פגישות מעקב יזומות, הערכת ביצועים והתאמות נקודתיות בהתאם להתקדמות.
    </p>
    <h4>⭐ יתרונות השירות</h4>
    <ul>
      <li><strong>בדיקת ביצוע בפועל</strong> – מעקב אחרי תרגולים בבית ובחוץ.</li>
      <li><strong>איתור נקודות לשיפור</strong> – פתרון בעיות חדשות שעולות עם הזמן.</li>
      <li><strong>עדכון תוכנית העבודה</strong> – התאמת הכלים לשינויים בסביבה ובדינמיקה.</li>
      <li><strong>תמיכה מקצועית</strong> – מענה לשאלות והכוונה שוטפת.</li>
    </ul>
    <h4>📌 מטרת השירות</h4>
    <p>
      לאפשר הטמעה יציבה של הכללים והמיומנויות שנלמדו, ולתת מענה מקצועי להתמודדות עם אתגרים מתפתחים.
    </p>
  </div>
</li>


<li>
  <button class="service-toggle" onclick="toggleServiceDetails('targetedAdvice')">
  🎯 ייעוץ ממוקד לאתגרים נקודתיים <span class="arrow">▼</span>
</button>
  <div id="targetedAdvice" class="service-details" style="display:none;">
    <h3>🎯 ייעוץ ממוקד לאתגרים נקודתיים</h3>
    <p>
      שירות קצר מועד המיועד לטיפול ממוקד בבעיות התנהגות ספציפיות. מתאים למי שמעוניין במענה מקצועי ומיידי לבעיה מסוימת.
    </p>
    <h4>⭐ יתרונות השירות</h4>
    <ul>
      <li><strong>אבחון ממוקד</strong> – הגדרה ברורה של מקור הבעיה.</li>
      <li><strong>פתרונות מותאמים</strong> – הנחיות ברורות ליישום מיידי בבית ובחוץ.</li>
      <li><strong>פשטות ויעילות</strong> – מענה ממוקד בזמן קצר.</li>
      <li><strong>הדרכה אישית</strong> – מתן כלים יישומיים והבהרת תהליך העבודה.</li>
    </ul>
    <h4>📌 מטרת השירות</h4>
    <p>
      לספק פתרון יעיל וברור לאתגרים נקודתיים בהתנהגות הכלב, ולאפשר התמודדות מקצועית עם בעיות מבלי להתחייב לתהליך ארוך.
    </p>
  </div>
</li>


<li>
  <button class="service-toggle" onclick="toggleServiceDetails('puppyTraining')">
  🐾 אילוף גורים לצרכים <span class="arrow">▼</span>
</button>
  <div id="puppyTraining" class="service-details" style="display:none;">
    <h3>🐾 אילוף גורים לצרכים – בניית יסודות להתנהלות נכונה</h3>
    <p>
      אילוף לצרכים הוא שלב חיוני ביצירת סדר יום ברור ומניעת בעיות עתידיות. השירות מתמקד בהקניית שגרה קבועה, ניהול לוח זמנים מותאם והבנת סימנים מקדימים לצורך. זהו תהליך שמטרתו למנוע הרגלים בעייתיים ולייצר תיאום מלא בין הכלב למשפחה.
    </p>
    <h4>⭐ שלבי העבודה</h4>
    <ul>
      <li><strong>אבחון צרכים יומיומיים</strong> – זיהוי זמני הצרכים והקצאת זמני הוצאה קבועים.</li>
      <li><strong>קביעת שגרה ברורה</strong> – בניית לוח זמנים נוח לביצוע והתאמה לאורח החיים של המשפחה.</li>
      <li><strong>חיזוק הרגלים רצויים</strong> – תגמול מבוקר על ביצוע נכון וניהול סיטואציות של פספוס.</li>
      <li><strong>מניעת טעויות נפוצות</strong> – הדרכה מעשית להתמודדות עם מקרים חוזרים.</li>
    </ul>
    <h4>📌 מטרה ותועלת</h4>
    <p>
      יצירת מסגרת ברורה עבור הגור, הפחתת בלבול וחיזוק הרגלים קבועים. המטרה היא למנוע בעיות התנהגות עתידיות ולאפשר לבעלי הכלב ניהול יומיומי פשוט וברור.
    </p>
  </div>
</li>

<li>
  <button class="service-toggle" onclick="toggleServiceDetails('adoptionAdvice')">
  🐕‍🦺 ייעוץ לפני אימוץ <span class="arrow">▼</span>
</button>
  <div id="adoptionAdvice" class="service-details" style="display:none;">
    <h3>🐕‍🦺 ייעוץ לפני אימוץ – קבלת החלטות מבוססת נתונים והתאמה</h3>
    <p>
      אימוץ כלב הוא צעד משמעותי שמצריך תכנון נכון והבנה מלאה של הצרכים והדרישות. השירות מספק ליווי מקצועי בתהליך קבלת ההחלטה, במטרה למנוע חוסר התאמה ולהבטיח קליטה מסודרת. הייעוץ מתמקד בניתוח סגנון החיים של המשפחה והגדרת הקריטריונים לבחירה נכונה של כלב.
    </p>
    <h4>⭐ מה כולל השירות</h4>
    <ul>
      <li><strong>ניתוח אורח חיים והעדפות</strong> – התאמת סוג וגודל הכלב למבנה המשפחה והסביבה.</li>
      <li><strong>הבנת דרישות הגזע והאופי</strong> – סקירה מקצועית של הבדלים בין גזעים וצרכים פיזיים.</li>
      <li><strong>הכנה לקראת הקליטה</strong> – הדרכה על ציוד נדרש והגדרת גבולות וכללים ראשוניים.</li>
      <li><strong>מניעת בעיות עתידיות</strong> – זיהוי גורמים בעייתיים מראש והיערכות מתאימה.</li>
    </ul>
    <h4>📌 קהל יעד</h4>
    <p>
      השירות מיועד למשפחות וליחידים השוקלים לאמץ כלב – בין אם גור, כלב בוגר או כלב מעמותה. מתאים במיוחד למי שחשוב לו לבצע בחירה מושכלת ומבוססת נתונים, במטרה להבטיח קליטה חלקה ומניעת בעיות עתידיות.
    </p>
  </div>
</li>

  </ul>
</section>
`

,
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

  <blockquote>
    <p>״לא האמנתי שאצליח לטייל עם הכלב שלי בלי למשוך ברצועה כל הזמן. אחרי כמה מפגשים עם יאנה – הטיולים שלנו הפכו לנעימים ורגועים. ממליץ מאוד!״</p>
    <footer>– עומר ג.</footer>
  </blockquote>

  <blockquote>
    <p>״יאנה עזרה לנו עם הגור החדש שלנו כבר מהשבועות הראשונים. בזכותה הוא למד צרכים מהר והבין את הגבולות בבית. תודה על הליווי והסבלנות!״</p>
    <footer>– רוני ואיילת</footer>
  </blockquote>

  <blockquote>
    <p>״הגענו ליאנה עם כלב בוגר שהיה מאוד חששן ולא הסתדר עם אורחים. יאנה ידעה איך לגשת אליו ולעבוד איתנו. היום הוא הרבה יותר בטוח ורגוע.״</p>
    <footer>– קרן ל.</footer>
  </blockquote>

  <blockquote>
    <p>״הקורס הקבוצתי היה פשוט חוויה! גם הכלב שלי למד המון, וגם אני. למדנו לתקשר טוב יותר, והמפגשים היו באווירה חיובית ונעימה.״</p>
    <footer>– נועם פ.</footer>
  </blockquote>

  <blockquote>
    <p>״אחרי הרבה נסיונות כושלים עם מאלפים אחרים, מצאנו את יאנה והרגשנו מיד בהבדל. הגישה שלה חיובית ומכבדת והכלב פשוט פורח.״</p>
    <footer>– מיכל ויונתן</footer>
  </blockquote>

  <blockquote>
    <p>״היינו ממש מתוסכלים – הכלב לא הפסיק לנבוח על כל דבר. יאנה הסבירה לנו בסבלנות מה לעשות ואיך לעבוד איתו. יש עוד עבודה – אבל כבר עכשיו יש שיפור ענק.״</p>
    <footer>– יוסי ח.</footer>
  </blockquote>

  <blockquote>
    <p>״אימוץ כלב מבוגר היה אתגר גדול עבורנו. יאנה עזרה לנו להבין אותו ולהתאים את הבית אליו. בזכותה הוא השתלב בצורה מדהימה במשפחה.״</p>
    <footer>– הילה ב.</footer>
  </blockquote>

  <blockquote>
    <p>״מעבר למקצועיות, יאנה הביאה המון רוגע וביטחון. היא ידעה להסביר לנו הכל בגובה העיניים וגרמה לנו להרגיש בטוחים בתהליך. ממליצה מאוד!״</p>
    <footer>– שירה ל.</footer>
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
    <p>מוזמנים לקבוע שיחת ייעוץ ראשונית ללא התחייבות. אשמח לשמוע על הכלב שלכם ולעזור לכם לבנות תוכנית מותאמת וממוקדת.</p>
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
      <script>
    setTimeout(() => { attachContactFormHandler(); }, 0);
  </script>
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

  // אם ביקשו לפתוח את האבחון
  if (page === 'contact' && window.shouldOpenDiagnosisForm) {
    setTimeout(() => loadDiagnosisForm(), 100);
    window.shouldOpenDiagnosisForm = false;
  }
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
    const response = await fetch('https://formspree.io/f/manawzrv', {
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



const FORMSPREE_URL = 'https://formspree.io/f/meovjwyj'; // כתובת ה-Formspree שלך

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






function attachContactFormHandler() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
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

    try {
      const response = await fetch('https://formspree.io/f/manawzrv', {
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
        form.reset();
        window.scrollTo(0, 0);
      } else {
        document.getElementById('successMessage').textContent = '⚠️ שגיאה בשליחה. נסה שוב מאוחר יותר.';
        document.getElementById('successMessage').style.display = 'block';
      }
    } catch (error) {
      document.getElementById('successMessage').textContent = '⚠️ שגיאה בחיבור. נסה שוב.';
      document.getElementById('successMessage').style.display = 'block';
    }
  });
}





function toggleServiceDetails(id) {
  const el = document.getElementById(id);
  const button = document.querySelector(`button[onclick*="${id}"]`);
  const arrow = button.querySelector('.arrow');

  if (el.style.display === 'none') {
    el.style.display = 'block';
    button.classList.add('open');
    if (arrow) arrow.textContent = '◄';
  } else {
    el.style.display = 'none';
    button.classList.remove('open');
    if (arrow) arrow.textContent = '▼';
  }
}









let deferredPrompt;
const installButton = document.getElementById('installButton');

// 1. מאזין לאירוע beforeinstallprompt
window.addEventListener('beforeinstallprompt', (e) => {
  // למנוע את ה-default
  e.preventDefault();
  // לשמור את האירוע
  deferredPrompt = e;
  // להציג את הכפתור
  installButton.style.display = 'block';
});

// 2. כאשר לוחצים על הכפתור
installButton.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const choiceResult = await deferredPrompt.userChoice;
    if (choiceResult.outcome === 'accepted') {
      console.log('המשתמש התקין את האפליקציה');
    } else {
      console.log('המשתמש ביטל את ההתקנה');
    }
    deferredPrompt = null;
    installButton.style.display = 'none';
  }
});



function openDiagnosisFromFooter() {
  window.shouldOpenDiagnosisForm = true;
  navigate('contact');
}









// Load home page by default
navigate('home');

