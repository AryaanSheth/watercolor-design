# Watercolor Design

This repository contains a scroll-driven watercolor dandelion artwork and a reusable Claude Code skill for creating tactile, hand-painted websites and illustrations.

## The skill

`watercolor-design` teaches an agent to build digital work that behaves like pigment, paper, and graphite instead of flat vector art with a texture overlay.

It covers:

- Translucent watercolor washes, pigment pooling, blooms, and paper grain
- Softly irregular organic shapes without hard geometric outlines
- Selective raw sketch lines and subdued pencil typography
- Botanical motion in which stems, leaves, buds, petals, and seeds transform continuously
- Performant scroll animation with stable SVG geometry
- Visual verification across lifecycle states and responsive widths

The skill entrypoint is [`SKILL.md`](.claude/skills/watercolor-design/SKILL.md). Detailed guidance lives in its [`references`](.claude/skills/watercolor-design/references/) directory.

## Install for Claude Code

Claude Code discovers skills placed in `.claude/skills/` for one project or `~/.claude/skills/` for every project.

### Use it from this repository

Clone the repository and start Claude Code from inside it:

```bash
git clone https://github.com/AryaanSheth/flower.git
cd flower
claude
```

The project-local skill is already installed at `.claude/skills/watercolor-design/`.

### Install it for all your projects

After cloning the repository, copy the skill into your personal Claude skills directory:

```bash
mkdir -p ~/.claude/skills
cp -R .claude/skills/watercolor-design ~/.claude/skills/
```

If `~/.claude/skills/` did not exist when Claude Code started, restart Claude Code once after copying the folder.

## Use the skill

Invoke it directly in Claude Code:

```text
/watercolor-design
```

Then describe the artifact you want, for example:

```text
/watercolor-design Create a quiet portfolio where a poppy grows from a pencil sketch into layered watercolor as I scroll.
```

Claude may also load the skill automatically when a request mentions watercolor, paper texture, pigment bleed, sketch lines, pencil lettering, botanical illustration, or organic growth animation.

See the [Claude Code skills documentation](https://code.claude.com/docs/en/slash-commands) for skill discovery and sharing behavior.

## Skill structure

```text
.claude/skills/watercolor-design/
├── SKILL.md
├── agents/
│   └── openai.yaml
└── references/
    ├── botanical-motion.md
    ├── verification.md
    └── visual-language.md
```

The `agents/openai.yaml` file provides optional metadata for tools that support the shared Agent Skills format. Claude Code uses `SKILL.md` and the referenced guidance files directly.
