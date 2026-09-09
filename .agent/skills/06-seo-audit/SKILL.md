---
name: game-seo-audit
version: 2.0
description: 用程序化规则优先检查生成站的页面映射、On-page SEO、内容完整性、内链和技术 SEO。
---

# Game SEO Audit Skill

## 程序优先，不让 LLM 自评

Hard Fail：
- 非首页 primary keyword 不属于游戏
- Title/H1 缺主词
- 内容低于 minimum
- 页面仍有工程 placeholder
- broken internal links
- orphan page
- canonical/sitemap 重大错误
- 页面没有独立 intent

Warning：
- density 偏离目标
- H2 泛化
- anchor 重复
- description 质量弱

LLM Repair 只处理可自动修复的 content/SEO 文本问题，最多 1 次。
