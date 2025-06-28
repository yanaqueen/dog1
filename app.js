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
  
  <p>שלום, אני יאנה ברגמן – מאלפת כלבים מוסמכת ובעלת הסמכה בינלאומית בגישה חיובית ומכבדת שמבוססת על תקשורת, אמון וכבוד הדדי. בעיניי אילוף הוא לא רק ללמד פקודות, אלא להבין באמת את הכלב ואתכם – הבעלים – ולבנות גשר של אמון ושיתוף פעולה. אני מאמינה שכל כלב הוא עולם ומלואו, עם צרכים, אופי ורגשות ייחודיים משלו. לכן כל תוכנית אילוף שאני בונה היא אישית ומדויקת, מותאמת בדיוק לכלב ולמשפחה, במטרה ליצור בית רגוע והרמוני שבו כולם מרגישים בטוחים ומובנים.</p>
  
  <p>במהלך השנים ליוויתי עשרות משפחות וכלבים בתהליכים אישיים שבהם בנינו יחד שפה משותפת, פתרנו בעיות התנהגות והפכנו את חיי היומיום לנעימים יותר. אני מאמינה שכל משפחה יכולה למצוא את הדרך הנכונה עבורה – דרך שמכבדת את הצרכים של הכלב ושומרת על רווחה ושקט נפשי לכל בני הבית. בעיניי, הצלחה היא לא רק כלב שמבצע פקודות אלא קשר חזק ומלא אמון שמאפשר חיים משותפים רגועים ומאושרים.</p>
  
  <p>החיבור שלי לעולם האילוף התחיל מהבית – מהכלב שלי, כלב בוגר עם אתגרים לא פשוטים שלימד אותי לא רק טכניקות אלא סבלנות אמיתית, הקשבה והבנה עמוקה של מה שהוא מנסה לומר לי. הוא שותף שלי במסע הזה – הוכחה חיה לכך שכל כלב יכול להשתנות ולהצליח, כשהתהליך בנוי על אמון נכון ותקשורת טובה. הוא ממשיך ללמד אותי כל יום על כוחה של הבנה עמוקה ואמפתיה – והופך אותי לא רק למאלפת טובה יותר אלא גם לאדם טוב יותר.</p>
  
  <p>אני רואה באילוף מסע משותף של בעלים וכלב – תהליך שמאפשר לכם לצמוח יחד, להבין זה את זה ולבנות תקשורת מקרבת וברורה. אני מזמינה אתכם להצטרף אליי לתהליך מותאם אישית שבו נבנה אמון, נבין את הצרכים של הכלב ושלכם ונעבוד בשיטות חיוביות ומכבדות. יחד ניצור מציאות חדשה – שבה החיים עם הכלב שלכם יהיו רגועים, הרמוניים ומלאים בביטחון ואהבה.</p>
</section>


  `,
services: `
<section>
  <h2>✔️ השירותים שלי</h2>
  <ul class="service-list">
<li>
  <button class="service-toggle" onclick="toggleServiceDetails('personalTraining')">🐶 אילוף אישי בבית הלקוח</button>
  <div id="personalTraining" class="service-details" style="display:none;">
    <h3>🐶 אילוף כלבים בבית הלקוח – הדרך הנכונה לחינוך והתאמה אישית</h3>
    <p>
      אילוף כלבים בבית הלקוח הוא הפתרון המושלם לכל מי שמחפש תהליך אישי, מותאם ויעיל באמת. במקום לנסות לתקן בעיות בסביבה זרה או להסתמך על מפגשים קבוצתיים בלבד, האילוף מתבצע אצלכם – בבית ובשכונה שבה הכלב חי כל יום. כך המאלף יכול לראות מקרוב את הדינמיקה, לזהות את שורש הקשיים ולהציע פתרונות מדויקים באמת.
    </p>

    <h4>⭐ מה היתרונות באילוף בבית?</h4>
    <ul>
      <li><strong>סביבה טבעית ומוכרת לכלב</strong> – הלמידה קלה יותר כשהכלב רגוע ובבית שלו.</li>
      <li><strong>חיסכון בזמן ומאמץ</strong> – האילוף מגיע עד אליכם, בלי פקקים או טרחה.</li>
      <li><strong>תוכנית מותאמת אישית</strong> – פתרונות אמיתיים, מותאמים לכלב ולמשפחה.</li>
      <li><strong>שיתוף כל בני הבית</strong> – כל המשפחה לומדת איך לשמור על הכללים יחד.</li>
    </ul>

    <h4>📌 מתי כדאי להזמין אילוף בבית?</h4>
    <p>
      אילוף בבית מתאים גם לגורים וגם לכלבים בוגרים עם בעיות כמו משיכות ברצועה, נביחות מוגזמות, קפיצות על אורחים, בעיות צרכים ותוקפנות. הטיפול מותאם לסביבה האמיתית שבה הבעיה קורית.
    </p>

    <h4>💡 למה זה יעיל יותר ממסגרת חיצונית?</h4>
    <p>
      במפגשים בבית פותרים את הבעיות בדיוק במקום שבו הן קורות. אין פתרונות כלליים או תיאורטיים – אלא עבודה ממוקדת ומותאמת אישית.
    </p>

    <h4>✔️ אילו בעיות פותרים?</h4>
    <ul>
      <li>✅ משיכות ברצועה</li>
      <li>✅ קפיצות על אנשים</li>
      <li>✅ נביחות מוגזמות</li>
      <li>✅ בעיות צרכים בבית</li>
      <li>✅ תוקפנות וחרדה</li>
    </ul>

    <h4>📞 למה לבחור בי?</h4>
    <p>
      אני מאמינה בגישה חיובית, מכבדת ואוהבת. המטרה שלי היא לא רק לאלף את הכלב, אלא ללמד אתכם איך לתקשר איתו טוב יותר. יחד נבנה קשר של אמון ושיתוף פעולה – כדי שתוכלו ליהנות מחיים רגועים ושמחים יחד.
    </p>
  </div>
</li>




<li>
  <button class="service-toggle" onclick="toggleServiceDetails('behaviorFix')">🦴 תיקון בעיות התנהגות</button>
  <div id="behaviorFix" class="service-details" style="display:none;">
    <h3>🦴 טיפול בבעיות התנהגות – תהליך אישי ומותאם לכלב שלך</h3>
    <p>
      כל כלב הוא עולם שלם עם אופי ייחודי, והרבה פעמים ההתנהגות שלו מושפעת מחוויות עבר, פחדים, או פשוט מחוסר הבנה הדדית. המטרה שלנו היא לא "לכבות" את ההתנהגות הבעייתית – אלא להבין אותה לעומק ולבנות ביחד שגרה ברורה ונוחה יותר גם לכם וגם לו.
    </p>

    <h4>⭐ למה זה חשוב?</h4>
    <p>
      בעיות התנהגות כמו נביחות יתר, תוקפנות, חרדות או הרס בבית הן לא סתם קפריזה – הן סימן שהכלב לא רגוע או לא בטוח בסביבה שלו. טיפול נכון הוא לא עונש – אלא כלי לשפר את איכות החיים שלו ושלכם.
    </p>

    <h4>✅ איך זה עובד?</h4>
    <ul>
      <li><strong>זיהוי הסיבה האמיתית</strong> – נבין יחד מה גורם להתנהגות: פחדים, חוסר חשיפה, עודף אנרגיה או הרגלים לא נכונים.</li>
      <li><strong>בניית תכנית מותאמת אישית</strong> – לפי הצרכים של הכלב והמשפחה, עם מטרות ברורות וצוות מקצועי שילווה אתכם.</li>
      <li><strong>מעקב ותמיכה שוטפת</strong> – לא נשאיר אתכם לבד. נעקוב אחרי ההתקדמות ונתאים את השיטה בקצב שנכון לכם.</li>
      <li><strong>תרגול והטמעה</strong> – נלמד איך לתרגל נכון עם הכלב בבית ובחוץ, כדי לייצר הרגלים חדשים ויציבים.</li>
    </ul>

    <h4>🐾 באילו בעיות מטפלים?</h4>
    <ul>
      <li>נביחות בלתי פוסקות</li>
      <li>תוקפנות כלפי כלבים או אנשים</li>
      <li>חרדת נטישה</li>
      <li>עשיית צרכים בבית</li>
      <li>הרס של חפצים וריהוט</li>
      <li>קפיצות על אנשים והתרגשות יתר</li>
    </ul>

    <h4>💡 למה איתי?</h4>
    <p>
      אני מאמינה בגישה סבלנית ואמפתית – בלי כוחניות או הפחדה. המטרה שלי היא ליצור הבנה וביטחון הדדי ביניכם לבין הכלב שלכם. תהליך ההתנהגות שאני מציעה הוא לא קסם של פגישה אחת – אלא מסע משותף שבו נלמד לתקשר טוב יותר ולחיות יחד בשלווה ובשמחה.
    </p>
  </div>
</li>

<li>
  <button class="service-toggle" onclick="toggleServiceDetails('groupCourse')">🐾 קורס קבוצתי</button>
  <div id="groupCourse" class="service-details" style="display:none;">
    <h3>🐾 קורס אילוף קבוצתי – לומדים יחד, נהנים יחד</h3>
    <p>
      אילוף קבוצתי הוא הרבה יותר משיעור עם עוד כלבים – זו חוויה חברתית מעשירה גם לכלב וגם לבעלים. במפגשים לומדים לפתח תקשורת טובה וברורה עם הכלב תוך כדי התמודדות עם גירויים אמיתיים בסביבה נשלטת. כלב שמתרגל הקשבה בקבוצה לומד לא רק פקודות – אלא גם ויסות עצמי, סבלנות ויחסי חברות עם כלבים אחרים.
    </p>

    <h4>⭐ למה לבחור בקורס קבוצתי?</h4>
    <ul>
      <li><strong>סוציאליזציה איכותית</strong> – חשיפה לכלבים שונים תוך ליווי מקצועי שמוודא שהמפגש חיובי ובטוח.</li>
      <li><strong>שליטה במצבי אמת</strong> – הכלב לומד להקשיב גם כשקורים דברים מסקרנים או מסיחי דעת סביבו.</li>
      <li><strong>חיזוק הקשר עם הבעלים</strong> – תרגולים משותפים בונים אמון ותקשורת ברורה ביניכם לבין הכלב.</li>
      <li><strong>למידה מגוונת</strong> – צפייה באחרים ותירגול קבוצתי מרחיבים את היכולת של הכלב ללמוד מצבים חדשים.</li>
    </ul>

    <h4>✅ איך זה מתבצע?</h4>
    <p>
      המפגשים מתוכננים כך שיתאימו לרמות שונות – מגורים צעירים ועד בוגרים שזקוקים ל"חינוך מחדש". בכל שיעור נבנה בהדרגה על הצלחות קודמות ומוסיפים אלמנטים חדשים. נדאג להתאמות אישיות לצרכים של כל כלב כדי שכל אחד יוכל להצליח בקצב שלו.
    </p>

    <p>
      הקבוצה עצמה היא יתרון גדול: הכלבים לומדים לתקשר זה עם זה, לזהות גבולות חברתיים ולהבין מה נדרש מהם גם בסביבה דינאמית. תוך כדי, המאלפת מלווה ומתקנת, ומספקת לכם כלים להמשיך את העבודה גם בבית.
    </p>

    <h4>💡 למי זה מתאים?</h4>
    <p>
      מתאים במיוחד למי שרוצה שהכלב שלו יהיה בטוח בעצמו ומחונך גם בסביבה עם גירויים. מושלם למשפחות עם ילדים שרוצות להבין איך לעבוד יחד עם הכלב, וגם לכלב בוגר שמתקשה להתרגל לכלבים אחרים או מתרגש מאוד בטיולים.
    </p>

    <h4>❤️ מה תקבלו בסוף התהליך?</h4>
    <p>
      כלב שמבין את החוקים, יודע לשמור על רוגע גם כשהוא מוקף גירויים, מקשיב ומגיב לפקודות גם במקומות חדשים. בנוסף, אתם תרוויחו ביטחון בעצמכם – תדעו איך להוביל את הכלב, איך לייצר עבורו גבולות ברורים ואיך ליהנות יחד מטיולים רגועים ונעימים.
    </p>

    <p>
      המטרה שלי היא להפוך את האילוף לחוויה מקרבת, חיובית ומחזקת, כזו שתשאיר לכם כלים להמשך הדרך ותהפוך את הקשר עם הכלב שלכם לעמוק ובריא יותר.
    </p>
  </div>
</li>



<li>
  <button class="service-toggle" onclick="toggleServiceDetails('puppyTraining')">🐾 אילוף גורים לצרכים</button>
  <div id="puppyTraining" class="service-details" style="display:none;">
    <h3>🐾 אילוף גורים לצרכים – התחלה ברגל ימין לחיים משותפים</h3>
    <p>
      לאמץ גור זו חוויה מרגשת שמביאה איתה שמחה, סקרנות והמון אהבה. אבל לצד זה, יש גם אחריות גדולה – והשלב הראשון והכי חשוב הוא לימוד צרכים נכון. גור שלא קיבל הכוונה ברורה עלול להתרגל לעשות את צרכיו בבית, וזה עלול להקשות על כל בני המשפחה וגם עליו.
    </p>

    <h4>⭐ למה זה כל כך קריטי?</h4>
    <p>
      אילוף לצרכים הוא הבסיס לניהול חיים משותפים ונעימים עם הכלב. זה לא רק נוחות וניקיון – זו הדרך ללמד את הגור משמעת בסיסית, להבין חוקים ולהרגיש ביטחון במסגרת ברורה. זה גם מחזק את הקשר והאמון ביניכם, כי הכלב לומד לסמוך עליכם ולהבין את הציפיות ממנו.
    </p>

    <h4>✅ איך זה עובד?</h4>
    <ul>
      <li><strong>הבנה של צרכי הגור</strong> – נלמד מתי הוא זקוק לעשות את צרכיו ואיך לזהות סימנים מוקדמים.</li>
      <li><strong>שגרה ברורה וקבועה</strong> – נבנה יחד לוח זמנים מותאם שיקל עליו להבין מתי ואיפה לעשות.</li>
      <li><strong>חיזוקים חיוביים</strong> – במקום כעס ועונשים, נעבוד עם תגמולים שמעודדים את ההתנהגות הרצויה.</li>
      <li><strong>התמודדות עם פספוסים</strong> – נלמד איך להגיב נכון כשקורה פספוס ואיך למנוע אותו להבא.</li>
    </ul>

    <h4>💡 למה כדאי לקבל עזרה מקצועית?</h4>
    <p>
      הרבה בעלי גורים מגלים שזו משימה מורכבת – כי לכל כלב אופי וקצב משלו. ייעוץ מקצועי חוסך לכם תסכול וזמן יקר ומונע טעויות נפוצות שיכולות להפוך להרגלים קשים לשינוי. בעזרת הדרכה מותאמת אישית, תוכלו להתחיל ברגל ימין ולבנות בסיס טוב לכל החיים.
    </p>

    <h4>🐶 למי זה מתאים?</h4>
    <p>
      לכל מי שאימץ גור – בין אם זו הפעם הראשונה או הפעם החמישית. השירות מתאים למשפחות עם ילדים, לאנשים עם לו״ז צפוף שזקוקים לשיטה מסודרת, וגם למי שחווה קשיים עם אילוף גור קודם ורוצה הפעם להצליח יותר.
    </p>

    <h4>❤️ המטרה שלי</h4>
    <p>
      ללמד אתכם ואת הגור שלכם בשפה חיובית, בגישה סבלנית ואוהבת, שתאפשר לכם לגדול יחד כצוות. אני כאן כדי להפוך את השלב הזה ממשימה מלחיצה לחוויה מקרבת ומהנה – כי כל גור יכול ללמוד, וכל משפחה יכולה ליהנות מחיים משותפים נקיים ונעימים.
    </p>
  </div>
</li>




<li>
  <button class="service-toggle" onclick="toggleServiceDetails('adoptionAdvice')">🐕‍🦺 ייעוץ לפני אימוץ</button>
  <div id="adoptionAdvice" class="service-details" style="display:none;">
    <h3>🐕‍🦺 ייעוץ מקצועי לפני אימוץ כלב – לבחור נכון ולבנות התחלה טובה</h3>
    <p>
      אימוץ כלב הוא רגע מרגש ומשמח – אבל הוא גם צעד גדול ומחייב. השירות שלי נועד לעזור לכם לעשות את הבחירה הנכונה, ולבנות תהליך קליטה רגוע ובטוח גם לכם וגם לכלב.
    </p>

    <h4>⭐ למה כדאי לקבל ייעוץ לפני האימוץ?</h4>
    <p>
      הרבה בעיות התנהגות מתחילות מחוסר התאמה בין הכלב למשפחה. ייעוץ מקצועי עוזר לכם להבין מראש איזה כלב יתאים לאורח החיים שלכם – האם אתם פעילים? גרים בעיר? יש לכם ילדים קטנים או חיות אחרות? – ובכך להבטיח מערכת יחסים בריאה וארוכה.
    </p>

    <h4>✅ מה כולל הייעוץ?</h4>
    <ul>
      <li><strong>שיחה אישית</strong> – ננתח יחד את הציפיות, ההרגלים והאורח חיים שלכם כדי להתאים את סוג הכלב המתאים.</li>
      <li><strong>הסבר על גזעים ואופי</strong> – הבנה של ההבדלים בין סוגי כלבים, צרכים פיזיים ונפשיים.</li>
      <li><strong>הכנה לקליטת הכלב</strong> – הדרכה על ציוד ראשוני, קביעת גבולות וכללים, בניית שגרה.</li>
      <li><strong>ניהול הציפיות</strong> – שיחה כנה על הקשיים שיכולים לצוץ ואיך להתמודד איתם.</li>
      <li><strong>בניית תוכנית הסתגלות הדרגתית</strong> – טיפים וכלים לימים הראשונים בבית, כדי להקל על המעבר ולהפחית חרדות.</li>
    </ul>

    <h4>🐾 למי זה מתאים?</h4>
    <p>
      לכל מי שחושב לאמץ – בין אם מדובר בגור צעיר, כלב בוגר מעמותה או כלב גזעי. השירות מתאים במיוחד למשפחות עם ילדים, אנשים שזו הפעם הראשונה שלהם עם כלב או בתים שיש בהם כבר בעלי חיים נוספים.
    </p>

    <h4>💡 למה איתי?</h4>
    <p>
      הייעוץ שלי משלב ניסיון אישי ומקצועי עם אהבה גדולה לבעלי חיים. אני לא מוכרת לכם חלומות – אלא מציידת אתכם בכלים והידע לבנייה של קשר בריא ובטוח מהיום הראשון. בסוף התהליך, הכלב שלכם ירגיש בבית – ואתם תרגישו בטוחים ומוכנים לקבל אותו אל הלב והמשפחה.
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
  if (el.style.display === 'none') {
    el.style.display = 'block';
  } else {
    el.style.display = 'none';
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












// Load home page by default
navigate('home');
