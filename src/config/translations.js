export const translations = {
    en: {
        'header.name': 'Dr. Jehad M. Hamamreh',
        'header.title': 'Associate Professor | Researcher | Inventor',
        'header.subtitle': 'Founder & Director of WISLABi.com',
        'about.title': 'About',
        'about.description': 'Dr. Jehad M. Hamamreh is a distinguished researcher and educator in the field of wireless communications and telecommunications engineering. He serves as an Associate Professor at the Electrical and Computer Engineering Department at Antalya Bilim University and is the Founder and Director of WISLABi.com, an R&D center focused on innovations in wireless communication and data security.',
        'about.education': 'Education',
        'about.education.text': 'Ph.D. in Telecommunication Engineering and Cyber-Systems from Istanbul Medipol University, where he graduated with excellence and was named top graduate of the year.',
        'video.title': 'Research Overview',
        'achievements.title': 'Achievements & Impact',
        'achievements.patents': 'Patents Invented',
        'achievements.papers': 'Research Papers',
        'achievements.books': 'Books Authored',
        'achievements.students': 'Students Mentored',
        'contributions.title': 'Research Contributions',
        'contributions.intro': 'Dr. Hamamreh is internationally recognized for his groundbreaking innovations, including:',
        'contributions.note': 'His patented works have been awarded gold and silver medals at numerous international invention contests and fairs, demonstrating the real-world impact and innovation of his research.',
        'focus.title': 'Research Focus Areas',
        'experience.title': 'Professional Experience',
        'academic.title': 'Academic Contributions',
        'academic.intro': 'Dr. Hamamreh has made significant contributions to the academic community through:',
        'connect.title': 'Connect',
        'footer.rights': 'All rights reserved.',
        'footer.collaboration': 'For R&D collaboration, consultation, training, or mentorship requests, please visit WISLABi.com',
        'footer.developed': 'Developed by',
        'footer.powered': 'Powered by Node.js & Express',
        'language.switch': 'عربي'
    },
    ar: {
        'header.name': 'د. جهاد محمد حمامرة',
        'header.title': 'أستاذ مشارك | باحث | مخترع',
        'header.subtitle': 'مؤسس ومدير WISLABi.com',
        'about.title': 'نبذة',
        'about.description': 'د. جهاد محمد حمامرة هو باحث ومعلم متميز في مجال الاتصالات اللاسلكية وهندسة الاتصالات. يعمل كأستاذ مشارك في قسم الهندسة الكهربائية وهندسة الحاسوب في جامعة أنطاليا بيليم، وهو مؤسس ومدير WISLABi.com، مركز بحث وتطوير يركز على الابتكارات في الاتصالات اللاسلكية وأمن البيانات.',
        'about.education': 'التعليم',
        'about.education.text': 'دكتوراه في هندسة الاتصالات والأنظمة السيبرانية من جامعة إسطنبول ميديبول، حيث تخرج بامتياز وحصل على لقب أفضل خريج للعام.',
        'video.title': 'نظرة عامة على البحث',
        'achievements.title': 'الإنجازات والتأثير',
        'achievements.patents': 'براءات اختراع',
        'achievements.papers': 'ورقة بحثية',
        'achievements.books': 'كتب مؤلفة',
        'achievements.students': 'طالب تحت الإشراف',
        'contributions.title': 'المساهمات البحثية',
        'contributions.intro': 'د. حمامرة معروف دولياً بابتكاراته الرائدة، بما في ذلك:',
        'contributions.note': 'حصلت أعماله المسجلة ببراءات اختراع على ميداليات ذهبية وفضية في العديد من المسابقات والمعارض الدولية للاختراعات، مما يظهر التأثير الواقعي والابتكار في أبحاثه.',
        'focus.title': 'مجالات التركيز البحثي',
        'experience.title': 'الخبرة المهنية',
        'academic.title': 'المساهمات الأكاديمية',
        'academic.intro': 'قدم د. حمامرة مساهمات كبيرة للمجتمع الأكاديمي من خلال:',
        'connect.title': 'تواصل',
        'footer.rights': 'جميع الحقوق محفوظة.',
        'footer.collaboration': 'للتعاون البحثي والاستشارات والتدريب أو طلبات الإرشاد، يرجى زيارة WISLABi.com',
        'footer.developed': 'تطوير',
        'footer.powered': 'مدعوم بـ Node.js و Express',
        'language.switch': 'English'
    }
};

export const data = {
    profile: {
        image: '/assets/profile.jpg',
        video: '/assets/research-video.mp4',
        achievements: [
            { number: '20+', key: 'achievements.patents' },
            { number: '90+', key: 'achievements.papers' },
            { number: '3', key: 'achievements.books' },
            { number: '20+', key: 'achievements.students' }
        ]
    },
    contributions: [
        {
            title: { en: 'Cross-layer Key-less Perfect Secrecy', ar: 'السرية الكاملة بدون مفتاح متعددة الطبقات' },
            description: { en: 'Revolutionary security approach for wireless systems', ar: 'نهج أمني ثوري للأنظمة اللاسلكية' }
        },
        {
            title: { en: 'Number Modulation', ar: 'التضمين الرقمي' },
            description: { en: 'Novel modulation technique for wireless communications', ar: 'تقنية تضمين جديدة للاتصالات اللاسلكية' }
        },
        {
            title: { en: 'Power Modulation in OFDM and MIMO Systems', ar: 'تضمين القدرة في أنظمة OFDM و MIMO' },
            description: { en: 'Enhanced efficiency in modern wireless networks', ar: 'كفاءة محسنة في الشبكات اللاسلكية الحديثة' }
        },
        {
            title: { en: 'Advanced NOMA', ar: 'NOMA المتقدم' },
            description: { en: 'Non-orthogonal multiple access schemes for future wireless systems', ar: 'مخططات الوصول المتعدد غير المتعامد للأنظمة اللاسلكية المستقبلية' }
        },
        {
            title: { en: 'OFDM-SPM', ar: 'OFDM-SPM' },
            description: { en: 'Orthogonal Frequency Division Multiplexing with Subcarrier Power Modulation for 6G and beyond', ar: 'تقسيم التردد المتعامد متعدد الإرسال مع تضمين قدرة الموجة الحاملة الفرعية للجيل السادس وما بعده' }
        }
    ],
    focusAreas: {
        en: ['Physical Layer Security', '5G/6G Technologies', 'OFDM Systems', 'MIMO Systems', 'Wireless Sensing', 'IoT Communications', 'Advanced Waveforms', 'AI in Telecommunications', 'Open Telecom', 'MAC Layer Security', 'Non-Orthogonal Multiple Access', 'Multidimensional Modulation'],
        ar: ['أمن الطبقة الفيزيائية', 'تقنيات الجيل الخامس/السادس', 'أنظمة OFDM', 'أنظمة MIMO', 'الاستشعار اللاسلكي', 'اتصالات إنترنت الأشياء', 'الموجات المتقدمة', 'الذكاء الاصطناعي في الاتصالات', 'الاتصالات المفتوحة', 'أمن طبقة MAC', 'الوصول المتعدد غير المتعامد', 'التضمين متعدد الأبعاد']
    },
    experience: [
        { title: { en: 'Associate Professor', ar: 'أستاذ مشارك' }, organization: { en: 'Antalya Bilim University, Electrical and Computer Engineering Department', ar: 'جامعة أنطاليا بيليم، قسم الهندسة الكهربائية وهندسة الحاسوب' } },
        { title: { en: 'Founder & Director', ar: 'مؤسس ومدير' }, organization: { en: 'WISLABi.com (Wireless Innovation Systems Laboratory)', ar: 'WISLABi.com (مختبر أنظمة الابتكار اللاسلكي)' } },
        { title: { en: 'Board Founding Member', ar: 'عضو مجلس إدارة مؤسس' }, organization: { en: 'Researcherstore.com', ar: 'Researcherstore.com' } },
        { title: { en: 'Researcher', ar: 'باحث' }, organization: { en: 'Texas A&M University, Department of Electrical and Computer Engineering', ar: 'جامعة تكساس إيه آند إم، قسم الهندسة الكهربائية وهندسة الحاسوب' } },
        { title: { en: 'Associate Editor', ar: 'محرر مشارك' }, organization: { en: 'RS-OJICT Journal', ar: 'مجلة RS-OJICT' } }
    ],
    academic: {
        en: ['90+ peer-reviewed scientific papers in prestigious journals and conferences', '3 main books on wireless communications and security', '7 book chapters in 5 different international books', 'Principal investigator for several funded research projects', 'Supervision of 20+ Master\'s and Ph.D. students'],
        ar: ['90+ ورقة علمية محكمة في مجلات ومؤتمرات مرموقة', '3 كتب رئيسية حول الاتصالات اللاسلكية والأمن', '7 فصول كتاب في 5 كتب دولية مختلفة', 'باحث رئيسي للعديد من المشاريع البحثية الممولة', 'الإشراف على أكثر من 20 طالب ماجستير ودكتوراه']
    },
    links: [
        { url: 'https://wislabi.com', text: 'WISLABi.com' },
        { url: 'https://www.researchgate.net/profile/Jehad-Hamamreh', text: 'ResearchGate' },
        { url: 'https://scholar.google.com.tr/citations?hl=en&user=pEgDDPIAAAAJ', text: 'Google Scholar' },
        { url: 'https://www.linkedin.com/in/jehad-m-hamamreh/', text: 'LinkedIn' },
        { url: 'https://hamamreh.substack.com/', text: 'Newsletter' },
        { url: 'https://researcherstore.com/profile/advanced-telecom/', text: 'Courses' }
    ]
};
