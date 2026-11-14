---
title: Systemd Service Manager
description: A lightweight interactive TUI for managing systemd services.
summary: Manage systemd services through a simple keyboard-driven terminal interface.
date: 2026-08
tags: [CLI, BASH, Systemd, Internal tool]
featured: true
links:
  - {
      label: Source,
      url: "https://github.com/NaftaliHolland/systemd-service-manager",
      external: true,
    }
---

At <a href="/work/softspin-technologies" target="_blank">work</a>, our team manages several systemd services. Whenever we had a new deployment, restarting all the services meant running commands like sudo systemctl restart app1.service one by one. That's fine when you're dealing with one service, but as the number of services grows, so does the time spent managing them.

I wrote this simple BASH script to make that process a little easier. We could list the services we wanted to manage in a configuration file and then use simple keyboard shortcuts: `s` to start/stop, `r` to restart, and `f` to follow logs.

No more repeatedly typing `sudo systemctl restart app1.service`, `sudo systemctl stop app1.service`, or `sudo journalctl -u app1.service -f`.

Not great news for someone who actually enjoys <a href="https://monkeytype.com/profile/NaftaliHolland" target="_blank">typing</a>, like me, but I was willing to make the trade-off. :)

The log-following feature covers the basics. For more specific queries, such as following logs from the last hour or starting from 10 hours ago, I still use journalctl directly. For example: `sudo journalctl -u app1.service --since "1 hour ago" -f`.

Check it out, <a href="https://github.com/NaftaliHolland/systemd-service-manager" target="_blank">source ↗</a>
