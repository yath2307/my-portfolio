---
date: '2'
heading: 'DAG-Based Provisioning System'
---

- Built a provisioning system that keeps configuration consistent across our distributed microservices.
- Provisioning is modelled as a DAG (directed acyclic graph) of steps, so each step runs only after everything it depends on is ready, in the right order, every time.
