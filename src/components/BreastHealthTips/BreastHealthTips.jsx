import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

const tips = [
    {
        title: "Регулярные осмотры у маммолога",
        description:
            "После 30 лет желательно проходить профилактический осмотр не реже одного раза в год (в некоторых случаях реже или чаще по рекомендации специалиста).",
        image: "/prevention_1.png",
    },
    {
        title: "Самообследование",
        description: "Проводите ежемесячно: это помогает вовремя заметить любые настораживающие изменения.",
        image: "/prevention_2.png",
    },
    {
        title: "Здоровое питание",
        description:
            "Ешьте больше растительной пищи и рыбы, меньше животных жиров и жареного. Контролируйте вес — он влияет на уровень эстрогенов.",
        image: "/prevention_3.png",
    },
    {
        title: "Физическая активность",
        description:
            "Регулярные упражнения (хотя бы 30 минут в день) помогают поддерживать гормональный баланс, укрепляют иммунитет и улучшают общее самочувствие.",
        image: "/prevention_4.png",
    },
    {
        title: "Отказ от вредных привычек",
        description:
            "Курение и злоупотребление алкоголем неблагоприятно сказываются на состоянии молочных желез и повышают риск развития опухолей.",
        image: "/prevention_5.png",
    },
    {
        title: "Контроль гормонального фона",
        description:
            "При необходимости и только под наблюдением врача принимайте гормональные препараты. Следите за здоровьем щитовидной железы и женской репродуктивной системы.",
        image: "/prevention_6.png",
    },
    {
        title: "Стресс-менеджмент",
        description:
            "Избегайте хронических стрессовых ситуаций, придерживайтесь режима сна и отдыха. Практикуйте техники релаксации (йога, медитация, дыхательные упражнения).",
        image: "/prevention_7.png",
    },
    {
        title: "Выбор правильного белья",
        description:
            "Носите бюстгальтер подходящего размера, который не сдавливает грудь. Слишком тесное бельё может негативно влиять на кровообращение.",
        image: "/prevention_8.png",
    },
    {
        title: "Грудное вскармливание",
        description:
            "По возможности поддерживайте грудное вскармливание как минимум 6 месяцев или дольше: это снижает риск развития некоторых форм рака груди.",
        image: "/prevention_9.png",
    },
];

export default function BreastHealthTips() {
    return (
        <div className="container mx-auto p-5">
            <motion.h2
                className="text-3xl md:text-4xl mb-10"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1}}
            >
                Профилактика и рекомендации по поддержанию здоровья груди
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {tips.map((tip, index) => (
                    <InViewItem key={index} index={index} tip={tip}/>
                ))}
            </div>
        </div>
    );
}

const InViewItem = ({index, tip}) => {
    const {ref, inView} = useInView({
        triggerOnce: false, // Срабатывает каждый раз при попадании в видимость
        threshold: 0.4, // 40% элемента должно быть в зоне видимости
    });

    return (
        <motion.div
            ref={ref}
            initial={{opacity: 0, y: 20}}
            animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 20,
            }}
            transition={{duration: 0.4, delay: index * 0.1}}
        >
            <div>
                <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-64 object-cover mb-4 rounded-lg"
                />
                <div className="flex items-center mb-4">
                    <h2 className="text-xl font-medium text-gray-900">
                        {tip.title}
                    </h2>
                </div>
                <p className="text-gray-700 text-left text-base">
                    {tip.description}
                </p>
            </div>
        </motion.div>
    );
};
