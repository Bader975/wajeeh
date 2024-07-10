import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

const challenges = [
  {
    question: "كيف استلام مشروع برمجي في فريق العمل:",
    options: [
      "تأكد من أنك فهمت متطلبات المشروع بشكل وافٍ، وتحقق من الجدول الزمني والموارد المتاحة، وابدأ في تنفيذ المهام وفقًا لتوجيهات الفريق.",
      "ابدأ في تنفيذ المهام فورًا دون مراجعة المتطلبات.",
    ],
    correctIndex: 0,
  },
  {
    question: "كيف اقوم بالتواصل مع مدير أو قائد فريق التطوير:",
    options: [
      "استخدم وسائل الاتصال المعتادة مثل البريد الإلكتروني أو تطبيقات الرسائل الفورية، و كن واضحًا في طلباتك أو استفساراتك.",
      "اتصل به بشكل عشوائي في أي وقت.",
    ],
    correctIndex: 0,
  },
  {
    question: "كيف يمكنني عرض المشروع بشكل أولي:",
    options: [
      "قم بإعداد عرض يشمل الأهداف، المتطلبات، والتقدم حتى الآن، احرص على توضيح الفوائد المتوقعة والتحديات المحتملة، و استعد لاستقبال الملاحظات واقتراحات التحسين من الفريق.",
      "قدم المشروع بشكل كامل وانتظر التقييم النهائي.",
    ],
    correctIndex: 0,
  },
  {
    question:
      "ما هي الخبرات أو الدورات التدريبية التي تنصح بها لتعزيز معرفتي ومهاراتي المهنية؟",
    options: [
      "اختيار دورات تدريبية تتناسب مع احتياجاتك المهنية، مثل الدورات في التطوير الشخصي، والتكنولوجيا، وإدارة الأعمال.",
      "التدريب على إدارة الوقت فقط.",
    ],
    correctIndex: 0,
  },
  {
    question: "ماهي أداة git ؟",
    options: ["هي اداة لإدارة الأصدارات في البرامج", "هي اداة لتحرير الصور."],
    correctIndex: 0,
  },
  {
    question: "ماهو github؟",
    options: [
      "تخزين سحابي لحفظ المشاريع البرمجية",
      "أداة لإدارة المهام اليومية.",
    ],
    correctIndex: 0,
  },
  {
    question: "ماهي الرياكس جس اس ؟",
    options: [
      "مكتبه تابعه لجافا سكربت لانشاء واجهات مستخدم بشكل سريع",
      "لغة برمجة مستقلة.",
    ],
    correctIndex: 0,
  },
  {
    question: "ماهي استخدامات جافا سكربت في الويب ؟",
    options: ["تستخدم لاضافة التفاعل في تطبيق الويب", "لإدارة قواعد البيانات."],
    correctIndex: 0,
  },
  {
    question: "ماهي قواعد البيانات ؟",
    options: [
      "قواعد البيانات هي نظم تنظم البيانات بشكل يمكن من إدارتها والوصول إليها بسهولة. تشمل قواعد البيانات العلائقية (مثل MySQL وOracle) وقواعد البيانات غير العلائقية (مثل MongoDB وCassandra).",
      "هي عبارة عن ملفات نصية يتم تخزين البيانات فيها بشكل غير منظم.",
    ],
    correctIndex: 0,
  },
  {
    question: "ماهي المكتبات",
    options: [
      "مكتبات البرمجة هي مجموعات من الأكواد الجاهزة التي توفر وظائف محددة يمكن للمبرمجين استخدامها لإتمام مهام معينة دون الحاجة لكتابة الأكواد من الصفر. تساعد المكتبات في تسريع عملية التطوير وزيادة الكفاءة عبر إعادة استخدام الكود.",
      "هي مجلدات تحتوي على ملفات المشروع فقط.",
    ],
    correctIndex: 0,
  },
  {
    question: "ما الفرق بين قواعد البيانات العلائقية والغير علائقية؟",
    options: [
      "قواعد البيانات العلائقية: تستخدم جداول مترابطة ولغة SQL، مثل MySQL وPostgreSQL. قواعد البيانات الغير علائقية: تستخدم هياكل بيانات متنوعة مثل الوثائق والرسوم البيانية، وتكون مرنة مع البيانات غير المنظمة، مثل MongoDB وCassandra.",
      "قواعد البيانات العلائقية تستخدم نصوص فقط، الغير علائقية تستخدم صور فقط.",
    ],
    correctIndex: 0,
  },
  {
    question: "كيف تقوم بتصميم قاعدة بيانات معقدة لتلبية متطلبات تطبيق معين؟",
    options: [
      "لتصميم قاعدة بيانات معقدة, اجمع وفهم المتطلبات, ثم صمم نموذج كيان -علاقة (), حوله الى نموذج منطقي مع تطبيق البيانات ,نفذ",
      "تصميم قاعدة بيانات لا يتطلب أي تحليل للمتطلبات.",
    ],
    correctIndex: 0,
  },
];

const ChallengeChat = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [feedback, setFeedback] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionChange = (e, index) => {
    const { value } = e.target;
    setUserAnswers({ ...userAnswers, [index]: value });
  };

  const handleCheckAnswer = (index) => {
    const userAnswer = parseInt(userAnswers[index]);
    const isCorrect = userAnswer === challenges[index].correctIndex;
    setFeedback({
      ...feedback,
      [index]: isCorrect
        ? `Good! The correct answer is: ${challenges[index].options[userAnswer]}`
        : `Good try, but the correct answer is: ${
            challenges[index].options[challenges[index].correctIndex]
          }`,
    });
    if (isCorrect) setScore(score + 1);
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    setCurrentQuestion(currentQuestion + 1);
  };
  const handleRestart = () => {
    setCurrentQuestion(0);
    setUserAnswers({});
    setFeedback({});
    setShowFeedback(false);
    setScore(0);
  };

  const handleShowAnswers = () => {
    setFeedback(
      challenges.reduce((acc, challenge, index) => {
        acc[index] = `The correct answer is: ${
          challenge.options[challenge.correctIndex]
        }`;
        return acc;
      }, {})
    );
    setShowFeedback(false);
  };

  const progress = ((currentQuestion / challenges.length) * 100).toFixed(0);

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold text-center">تحديات وجيه</h1>
      <div className="w-full bg-gray-200 rounded-full">
        <div
          className="bg-[#7dbf45a8] font-medium text-white text-md text-center p-0.5 leading-none rounded-full"
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>
      {currentQuestion < challenges.length ? (
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <p className="text-lg font-semibold">
            {challenges[currentQuestion].question}
          </p>
          <select
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
            value={userAnswers[currentQuestion] || ""}
            onChange={(e) => handleOptionChange(e, currentQuestion)}
            disabled={showFeedback}
          >
            <option value="" disabled>
              اختر الاجابة
            </option>
            {challenges[currentQuestion].options.map((option, optIndex) => (
              <option key={optIndex} value={optIndex}>
                {option}
              </option>
            ))}
          </select>
          <button
            onClick={() => handleCheckAnswer(currentQuestion)}
            className="px-4 py-2 mt-2 text-white bg-[#035430] rounded-lg"
            disabled={showFeedback}
          >
            تحقق من الاجابة
          </button>
          {showFeedback && (
            <div>
              <p
                className={`mt-2 ${
                  feedback[currentQuestion].includes("Good!")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {feedback[currentQuestion]}
              </p>
              <button
                onClick={handleNextQuestion}
                className="px-4 py-2 mt-2 text-white bg-[#151327] rounded-lg"
              >
                السؤال التالي
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <p className="text-lg font-semibold">لقد وصلت الى نهاية التحدي</p>
          <p className="mt-2">
            عدد نقاطك هي : {score} من {challenges.length}
          </p>
        </div>
      )}
      <div className="flex space-x-4">
        <button
          onClick={handleRestart}
          className="px-4 py-2 text-white bg-red-600 rounded-lg"
        >
         اعادة ابدأ التحدي
        </button>
        <button
          onClick={handleShowAnswers}
          className="px-4 py-2 text-white bg-green-600 rounded-lg"
        >
         عرض الاجابات الصحيحة
        </button>
      </div>
      {Object.keys(feedback).length > 0 && (
        <div className="mt-4 p-4 bg-gray-200 rounded-lg">
          {Object.keys(feedback).map((key) => (
            <p key={key} className="text-lg">
              <span className="font-bold text-right">
                {challenges[key].question}
              </span>
              <br />
              {feedback[key]}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChallengeChat;
