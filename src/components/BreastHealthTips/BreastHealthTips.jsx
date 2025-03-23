import { motion } from "framer-motion";
import { FaAppleAlt, FaHeartbeat, FaSmokingBan, FaBicycle, FaFemale } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const tips = [
    {
        title: "Регулярные осмотры у маммолога",
        description:
            "После 30 лет желательно проходить профилактический осмотр не реже одного раза в год (в некоторых случаях реже или чаще по рекомендации специалиста).",
        icon: <FaFemale />,
        image: "/img_2.jpg",
    },
    {
        title: "Самообследование",
        description: "Проводите ежемесячно: это помогает вовремя заметить любые настораживающие изменения.",
        icon: <FaFemale />,
        image: "/img_2.jpg",
    },
    {
        title: "Здоровое питание",
        description:
            "Старайтесь употреблять больше овощей, фруктов, цельнозерновых продуктов, бобовых и рыбы. Ограничьте количество животных жиров и жареной пищи. Контролируйте вес, так как избыточная масса тела повышает уровень эстрогенов.",
        icon: <FaAppleAlt />,
        image: "/img_2.jpg",
    },
    {
        title: "Физическая активность",
        description:
            "Регулярные упражнения (хотя бы 30 минут в день) помогают поддерживать гормональный баланс, укрепляют иммунитет и улучшают общее самочувствие.",
        icon: <FaBicycle />,
        image: "/img_2.jpg",
    },
    {
        title: "Отказ от вредных привычек",
        description:
            "Курение и злоупотребление алкоголем неблагоприятно сказываются на состоянии молочных желез и повышают риск развития опухолей.",
        icon: <FaSmokingBan />,
        image: "/img_2.jpg",
    },
    {
        title: "Контроль гормонального фона",
        description:
            "При необходимости и только под наблюдением врача принимайте гормональные препараты. Следите за здоровьем щитовидной железы и женской репродуктивной системы.",
        icon: <FaHeartbeat />,
        image: "/img_2.jpg",
    },
    {
        title: "Стресс-менеджмент",
        description:
            "Избегайте хронических стрессовых ситуаций, придерживайтесь режима сна и отдыха. Практикуйте техники релаксации (йога, медитация, дыхательные упражнения).",
        icon: <FaHeartbeat />,
        image: "/img_2.jpg",
    },
    {
        title: "Выбор правильного белья",
        description:
            "Носите бюстгальтер подходящего размера, который не сдавливает грудь. Слишком тесное бельё может негативно влиять на кровообращение.",
        icon: <FaFemale />,
        image: "/img_2.jpg",
    },
    {
        title: "Грудное вскармливание",
        description:
            "По возможности поддерживайте грудное вскармливание как минимум 6 месяцев или дольше: это снижает риск развития некоторых форм рака груди.",
        icon: <FaFemale />,
        image: "/img_2.jpg",
    },
];

export default function BreastHealthTips() {
    return (
        <div className="container mx-auto p-8">
            <motion.h2
                className="text-4xl mb-10 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Профилактика и рекомендации по поддержанию здоровья груди
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {tips.map((tip, index) => (
                    <InViewItem key={index} index={index} tip={tip} />
                ))}
            </div>
        </div>
    );
}

const InViewItem = ({ index, tip }) => {
    const { ref, inView } = useInView({
        triggerOnce: false, // Срабатывает каждый раз при попадании в видимость
        threshold: 0.4, // 80% элемента должно быть в зоне видимости
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 20,
            }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
        >
            <div className="bg-white hover:shadow-lg transition-all">
                <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-64 object-cover mb-4 rounded-lg"
                />
                <div className="flex items-center mb-4">
                    <div className="text-3xl text-gray-800 mr-4">{tip.icon}</div>
                    <h2 className="text-xl font-medium text-gray-900">{tip.title}</h2>
                </div>
                <p className="text-gray-700 text-justify text-base">{tip.description}</p>
            </div>
        </motion.div>
    );
};
