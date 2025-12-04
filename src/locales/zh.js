export default {
    title: 'THE SEED',
    subtitle: '游戏交互智能体',
    tagline: '下一代游戏交互方式',
    scrollToExplore: '向下滚动探索',

    sections: {
        vision: {
            title: '愿景',
            content: [
                '面向游戏开发者的开源框架，通过统一的Agent接入协议，实现AI Agent对游戏的实时感知与可控操作。',
                '成为继鼠标、键盘、手柄之后，下一代游戏交互方式。'
            ]
        },

        market: {
            title: '市场机会',
            stats: [
                { value: '33.8亿', label: '全球玩家' },
                { value: '1840亿美元', label: '市场规模' },
                { value: '4亿', label: '残疾玩家' },
                { value: '23.3% 复合年增长率', label: '游戏生成式AI' }
            ],
            insights: [
                '游戏已是全球最大的数字娱乐产业，任何交互方式的革新都将撬动千亿级市场。',
                '据Market.us预测,生成式AI在游戏市场的规模将以23.3%的复合年增长率增长,预计2032年将达到71亿美元。',
                '全球有超过4亿游戏玩家患有某种形式的残疾,但目前仅有<5%的游戏提供完善的无障碍支持。'
            ]
        },

        painPoints: {
            title: '痛点与挑战',
            points: [
                '传统游戏操作方式门槛高，学习成本大',
                '部分游戏存在大量重复劳动（刷材料、跑图等）',
                '视障/肢体障碍玩家缺乏友好的可访问性方案',
                'NPC交互依旧停留在固定文本或脚本，缺乏真实感',
                'AI能力快速发展，但尚未真正进入游戏内核'
            ]
        },

        features: {
            title: '核心功能',
            nonCore: {
                title: '玩家侧工具',
                items: [
                    {
                        name: 'GIA Copilot (智能副驾驶)',
                        description: 'AI驱动的游戏助手',
                        features: [
                            '语音控制：通过自然语言指令（"帮我跑到最近的商店买十瓶血药"）直接映射为游戏操作',
                            '智能代肝：基于视觉识别，自动执行采集、搬运等低策略重复任务',
                            '战术参谋：实时分析战局，提供类似《钢铁侠》JARVIS的语音战术建议'
                        ]
                    }
                ]
            },
            core: {
                title: '游戏核心创新',
                items: [
                    {
                        name: 'Deep-NPC',
                        description: '具备长期记忆、性格模型和自主决策权的NPC',
                        features: [
                            '可用自然语言实现外交、交易、战术沟通等',
                            '参与解谜、探索、战斗等游戏核心玩法',
                            'AI角色可能因性格不合而"抗命"或"叛变"'
                        ]
                    },
                    {
                        name: '动态叙事引擎',
                        description: '根据玩家行为实时生成剧情分支',
                        features: [
                            'AI与环境双向互动产生涌现式玩法',
                            '伏击、谈判、误导、制造随机事件',
                            '让游戏世界更鲜活、更不可预测、拥有更高的可重玩性'
                        ]
                    }
                ]
            }
        },

        architecture: {
            title: '技术架构',
            description: '双循环系统',
            loops: [
                { name: '内部循环', description: 'AI Agent ↔ 游戏状态与操作' },
                { name: '外部循环', description: '玩家 ↔ AI Agent指令与反馈' }
            ]
        },

        business: {
            title: '商业模式',
            toc: {
                title: 'ToC (面向消费者)',
                items: [
                    'GIA Pro：订阅或Token售卖获得更多服务内容',
                    'Persona市场：售卖个性化AI语音包和形象'
                ]
            },
            tob: {
                title: 'ToB (面向企业)',
                items: [
                    'SDK授权：向中小游戏开发者提供AI NPC解决方案，按API调用量或游戏销量分成',
                    '服务支持：通过购买项目开发方面的支持'
                ]
            }
        },

        conclusion: {
            title: '未来的种子',
            content: '在作品SAO中，也存在名为The Seed的开发套件，以此为基础构建了一整个由大量虚拟游戏环境组成的系统，是虚拟世界的种子，也是未来的种子。我们相信我们的The Seed也会在开源社区等的孕育下，成长出无数次世代的，拥有灵魂的NPC、游戏以及泛化的虚拟世界，在未来愈加完善，拥有越来越强大的功能，提供更丰富的更有价值的无限可能。'
        },

        links: {
            title: '相关链接',
            items: [
                { label: '项目仓库', url: 'https://github.com/anantheparty/The-Seed' },
                { label: '应用演示', url: 'https://github.com/anantheparty/THE-Seed-OpenRA' },
                { label: '前置项目', url: 'https://github.com/AI-for-anyone/RedAlert' }
            ]
        },

        footer: '© The Seed 项目。灵感来自《刀剑神域》。'
    }
};
