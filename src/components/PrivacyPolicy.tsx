import type { ReactNode } from "react";
import { ArrowLeft, Shield, Eye, Database, Lock, Trash2, UserCheck, Globe, Camera, AlertTriangle, Server } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-background-dark">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-xl border-b border-slate-800/50">
                <div className="container mx-auto max-w-4xl px-4 py-4 flex items-center gap-4">
                    <a
                        href="#/"
                        className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors group"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm">返回首页</span>
                    </a>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative overflow-hidden py-16 md:py-24">
                {/* Background glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto max-w-4xl px-4 relative">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="size-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent-purple/20 border border-white/10 flex items-center justify-center">
                            <Shield size={24} className="text-primary" />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase tracking-widest">秃了么AI · Tuleme</p>
                            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                隐私政策
                            </h1>
                        </div>
                    </div>
                    <p className="text-slate-400 text-sm">
                        最后更新日期：2026 年 3 月 30 日 · 生效日期：2026 年 3 月 30 日
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="pb-24 px-4">
                <div className="container mx-auto max-w-4xl space-y-8">

                    {/* 引言 */}
                    <PolicyCard icon={<Shield size={20} />} title="引言">
                        <p>
                            欢迎使用「秃了么AI」（Tuleme）应用（以下简称"本应用"）。本应用由<strong>熔炉科技（海口）有限公司</strong>（以下简称"我们"）开发和运营。我们深知个人信息对您的重要性，并将尽全力保护您的隐私安全。
                        </p>
                        <p>
                            本隐私政策旨在向您说明我们如何收集、使用、存储和保护您的个人信息。请您在使用本应用前仔细阅读本政策。
                        </p>
                    </PolicyCard>

                    {/* 信息收集 */}
                    <PolicyCard icon={<Eye size={20} />} title="我们收集的信息">
                        <h4 className="font-semibold text-white mt-4 mb-2">1. 您主动提供的信息</h4>
                        <ul className="list-disc list-inside space-y-2 text-slate-400">
                            <li><strong className="text-slate-300">面部/头部照片：</strong>用于发际线外观分析功能。照片在本地设备端处理后，可能以加密方式发送至我们的安全服务器进行 AI 分析，分析完成后立即删除。</li>
                            <li><strong className="text-slate-300">用户名：</strong>您可选择设置的应用内昵称，仅存储在本地设备。</li>
                            <li><strong className="text-slate-300">年龄段和性别：</strong>用于为您提供更准确的分析参考。此信息存储在本地设备，在使用 AI 增强分析时会作为上下文信息发送至服务器，但不与任何个人身份关联。</li>
                            <li><strong className="text-slate-300">自我评估问卷：</strong>您可选择填写的头发状况自我评估问卷，答案和评估结果仅存储在本地设备。评估摘要可能在 AI 增强分析时作为辅助上下文发送至服务器。</li>
                        </ul>

                        <h4 className="font-semibold text-white mt-4 mb-2">2. 自动收集的信息</h4>
                        <ul className="list-disc list-inside space-y-2 text-slate-400">
                            <li><strong className="text-slate-300">设备标识符 (Device ID)：</strong>用于识别设备，管理服务频率限制。采用匿名化的 UUID 格式，不与您的真实身份关联。该标识符通过 iOS Keychain 安全存储，卸载应用后可能仍保留在设备中（详见「数据删除」章节）。</li>
                            <li><strong className="text-slate-300">分析记录：</strong>包括分析时间、分析结果评分、CV 检测参数等。完整记录（含照片）存储在您的本地设备；同时，脱敏的分析数据摘要（不含照片）也会保存在我们的服务器端，用于生成月度报告和趋势分析服务。</li>
                            <li><strong className="text-slate-300">面部特征点数据：</strong>本应用使用设备端人脸关键点检测技术（FaceMesh）定位面部几何特征，用于精准分析发际线位置。此处理完全在您的设备本地完成，特征点数据不会上传至任何服务器。</li>
                        </ul>

                        <h4 className="font-semibold text-white mt-4 mb-2">3. 我们不收集的信息</h4>
                        <ul className="list-disc list-inside space-y-1 text-slate-400">
                            <li>我们<strong className="text-slate-300">不会</strong>收集您的姓名、电话号码、电子邮件地址、地理位置或通讯录等个人敏感信息。</li>
                            <li>我们<strong className="text-slate-300">不会</strong>在服务器端持久化存储您的照片。</li>
                        </ul>
                    </PolicyCard>

                    {/* 系统权限 */}
                    <PolicyCard icon={<Camera size={20} />} title="系统权限">
                        <p>本应用可能会请求以下系统权限，您可以随时在设备设置中管理这些权限：</p>
                        <ul className="list-disc list-inside space-y-2 text-slate-400 mt-2">
                            <li><strong className="text-slate-300">相机权限：</strong>用于实时拍摄头部照片进行发际线外观分析。本应用仅使用前置摄像头，不会在后台访问摄像头。</li>
                            <li><strong className="text-slate-300">通知权限（可选）：</strong>如果您开启了定期检测提醒功能，本应用将请求通知权限以发送本地提醒通知。所有通知均在本地调度，不涉及远程推送服务。</li>
                        </ul>
                    </PolicyCard>

                    {/* 信息使用 */}
                    <PolicyCard icon={<Database size={20} />} title="信息的使用">
                        <p>我们收集的信息仅用于以下目的：</p>
                        <ul className="list-disc list-inside space-y-1 text-slate-400 mt-2">
                            <li>提供发际线外观分析服务和 AI 增强分析建议</li>
                            <li>在您的设备本地展示历史分析记录和趋势数据</li>
                            <li>管理服务使用频率（如每日分析次数限制）</li>
                            <li>验证和管理订阅状态</li>
                            <li>改善应用性能和用户体验</li>
                        </ul>
                        <div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/10">
                            <p className="text-sm text-slate-400">
                                <strong className="text-primary">重要声明：</strong>我们不会将您的个人信息出售、出租或以其他方式提供给任何第三方用于营销目的。
                            </p>
                        </div>
                    </PolicyCard>

                    {/* 数据存储与安全 */}
                    <PolicyCard icon={<Lock size={20} />} title="数据存储与安全">
                        <h4 className="font-semibold text-white mt-4 mb-2">本地存储</h4>
                        <p>
                            您的完整分析记录（含照片）、面部特征点校准数据和个人设置存储在您的设备本地（IndexedDB）。卸载应用将删除绝大部分本地数据（关于设备标识符的特殊情况，请参阅「数据删除」章节）。
                        </p>

                        <h4 className="font-semibold text-white mt-4 mb-2">服务器端处理与存储</h4>
                        <p>
                            当您使用 AI 增强分析功能时，经裁剪的头部区域照片将通过加密通道（HTTPS/TLS）传输至我们的安全服务器。<strong className="text-slate-200">照片仅在分析过程中临时存在于服务器内存，分析结束后立即销毁，不会写入持久化存储。</strong>
                        </p>
                        <p className="mt-3">
                            但以下<strong className="text-slate-300">不含照片的数据</strong>会以匿名化方式存储在我们的服务器数据库中，与设备标识符（而非您的真实身份）关联：
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-slate-400 mt-2">
                            <li><strong className="text-slate-300">分析结果摘要：</strong>AI 评分、等级、关键发现、建议等文字结论，以及 CV 检测的数值参数（如发际线后退比、头顶覆盖率等）。同时记录您提供的年龄段和性别信息。</li>
                            <li><strong className="text-slate-300">行为标记记录：</strong>您在应用内添加的产品/养护/生活习惯等行为标签。</li>
                            <li><strong className="text-slate-300">月度报告数据：</strong>系统自动生成的月度统计汇总和 AI 总评。</li>
                            <li><strong className="text-slate-300">设备记录：</strong>设备标识符、订阅状态和使用次数统计。</li>
                        </ul>
                        <p className="mt-3 text-slate-400">
                            上述服务器端数据用于提供月报生成、跨设备趋势分析等增值服务。
                        </p>

                        <h4 className="font-semibold text-white mt-4 mb-2">安全措施</h4>
                        <ul className="list-disc list-inside space-y-1 text-slate-400">
                            <li>所有网络传输均使用 TLS 加密</li>
                            <li>服务器采用严格的访问控制和请求验证</li>
                            <li>API 请求包含设备 ID 验证和频率限制保护</li>
                            <li>请求体大小限制，防止滥用</li>
                            <li>设备标识符通过 iOS Keychain 加密存储</li>
                        </ul>
                    </PolicyCard>

                    {/* 第三方服务 */}
                    <PolicyCard icon={<Globe size={20} />} title="第三方服务">
                        <p>本应用可能使用以下第三方服务：</p>
                        <ul className="list-disc list-inside space-y-2 text-slate-400 mt-2">
                            <li><strong className="text-slate-300">Apple App Store：</strong>处理应用内购买和订阅管理。相关支付信息由 Apple 直接处理，我们不会接触您的支付信息。</li>
                            <li><strong className="text-slate-300">AI 分析服务提供商：</strong>我们使用第三方大语言模型服务对经裁剪的头部区域图片进行分析。传输至 AI 服务的数据仅包含裁剪后的头部照片和匿名化的参考信息（如年龄段、性别），不包含姓名、联系方式等可直接识别个人身份的信息。</li>
                        </ul>
                        <p className="mt-2">
                            这些第三方服务有其各自的隐私政策，我们建议您查阅相关政策以了解其数据处理方式。
                        </p>
                    </PolicyCard>

                    {/* 用户权利 */}
                    <PolicyCard icon={<UserCheck size={20} />} title="您的权利">
                        <p>您对自己的个人信息享有以下权利：</p>
                        <ul className="list-disc list-inside space-y-1 text-slate-400 mt-2">
                            <li><strong className="text-slate-300">访问权：</strong>您可以随时在应用内查看已收集的所有个人信息。</li>
                            <li><strong className="text-slate-300">删除权：</strong>您可以随时在应用内清除所有历史记录数据，或通过卸载应用删除所有本地数据。</li>
                            <li><strong className="text-slate-300">撤回同意权：</strong>您可以随时停止使用本应用的分析功能。</li>
                            <li><strong className="text-slate-300">拒绝权：</strong>您可以选择仅使用本地 CV 分析功能，而不使用需要网络连接的 AI 增强分析。</li>
                            <li><strong className="text-slate-300">权限管理权：</strong>您可以随时在设备系统设置中撤销相机、通知等权限。</li>
                        </ul>
                    </PolicyCard>

                    {/* 数据删除 */}
                    <PolicyCard icon={<Trash2 size={20} />} title="数据删除">
                        <p>
                            由于绝大多数数据存储在您的本地设备，您可以通过以下方式删除数据：
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-slate-400 mt-2">
                            <li>在应用内的设置页面清除所有本地历史分析记录</li>
                            <li>卸载本应用，将自动删除所有本地存储的数据（包括分析记录、个人设置等）</li>
                        </ul>
                        <div className="mt-4 p-4 rounded-lg bg-amber-500/5 border border-amber-500/15">
                            <div className="flex items-start gap-2">
                                <AlertTriangle size={16} className="text-amber-400 mt-0.5 shrink-0" />
                                <div className="text-sm text-slate-400 space-y-2">
                                    <p><strong className="text-amber-300">请注意：</strong></p>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>设备标识符（Device ID）通过 iOS Keychain 存储，卸载应用后可能仍保留在设备中。如需彻底清除，您可以在 iOS 系统设置中手动管理 Keychain 数据。</li>
                                        <li>服务器端存储的分析结果摘要、行为标记和月度报告等数据不会因卸载应用而自动删除。如需删除这些数据，请通过以下联系方式与我们联系，我们将在 30 个工作日内处理您的删除请求。</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <p className="mt-3">
                            如需请求删除我们服务器上关联的任何数据，请通过以下联系方式与我们联系。
                        </p>
                    </PolicyCard>

                    {/* 儿童隐私 */}
                    <PolicyCard icon={<Shield size={20} />} title="儿童隐私">
                        <p>
                            本应用不面向 13 岁以下的儿童。我们不会故意收集 13 岁以下儿童的个人信息。如果您是家长或监护人，并且发现您的孩子向我们提供了个人信息，请联系我们，我们将尽快删除相关信息。
                        </p>
                    </PolicyCard>

                    {/* 政策更新 */}
                    <PolicyCard icon={<Globe size={20} />} title="隐私政策更新">
                        <p>
                            我们可能会不定期更新本隐私政策。政策变更后，我们将在应用内发布更新版本，并更新页面顶部的"最后更新日期"。建议您定期查阅本政策以了解最新的隐私保护信息。
                        </p>
                    </PolicyCard>

                    {/* 联系方式 */}
                    <div className="glass-card rounded-2xl p-6 md:p-8 border border-primary/20">
                        <h3 className="text-xl font-bold text-white mb-4">联系我们</h3>
                        <p className="text-slate-400 mb-4">
                            如果您对本隐私政策有任何疑问、意见或请求，请通过以下方式联系我们：
                        </p>
                        <div className="space-y-2 text-slate-400">
                            <p><strong className="text-slate-300">公司名称：</strong>熔炉科技（海口）有限公司</p>
                            <p><strong className="text-slate-300">电子邮件：</strong>
                                <a href="mailto:contact@forgetech.site" className="text-primary hover:text-blue-400 transition-colors">
                                    contact@forgetech.site
                                </a>
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Simple Footer */}
            <footer className="bg-[#0b0f17] border-t border-slate-800/50 py-8 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <p className="text-sm text-slate-500">© 2025 熔炉科技（海口）有限公司 · ForgeTech. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

function PolicyCard({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
    return (
        <div className="glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-white/15">
            <div className="flex items-center gap-3 mb-4">
                <div className="size-9 rounded-xl bg-gradient-to-br from-primary/15 to-accent-purple/10 flex items-center justify-center text-primary">
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
            <div className="text-slate-400 leading-relaxed space-y-3">
                {children}
            </div>
        </div>
    );
}
