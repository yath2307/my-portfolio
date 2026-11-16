---
date: '7'
heading: 'mkOS Shell'
---

- Leading mkOS, a greenfield re-platforming of myKaarma's dealership software into a single app shell, where each product (Communication, Payments, Inspections, Appointments and more) plugs in as an independent app.
- As Project Lead, driving the architecture, technical strategy and delivery across teams from the ground up.
- The shell knows nothing about apps at build time. It reads them from a registry and loads each one on demand, as a micro-frontend (Native Federation) for our own apps or a sandboxed iframe for third-party ones.
- Apps talk to the shell only through a framework-neutral Platform SDK (auth, dealership context, navigation, notifications), so teams can build in Angular, React or plain TypeScript. Third-party apps get a limited version of it and never see a user's token.
