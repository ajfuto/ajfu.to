---
title: My Homelab Experience
date: "2023-01-02 22:21:49.196326"
description: "My self-hosted NAS, backup solution, virtualization environment, and more."
---

# Overview

Admittedly, this is less of a tech tip and more of a blog-style post.

I've been looking at getting into homelabbing for a long time now. For the past few years, I have used an old gaming PC as an ad hoc file server, media server, and remote PC, but it was far from anything formal. I've finally had the means to look into putting together something more formal; this post describes that journey.

This homelab will serve as a platform allowing me to polish skills learned in school, explore emerging technologies, and prepare myself for my future infosec career.

---

# My Goals
Before setting off on a project, it's important to set some goals. The following list describes capabilities I would like to have with the finished product:
* Simple NAS setup with robust authentication
* Centralized file hosting (DropBox/Google Drive replacement)
* Seamless *(-ish)* photo sync and photo library (iCloud Photos replacement)
* Quickly spin up various VMs for sandboxing
* Media server
* VPN solution for accessing my home network remotely
* Dashboard that reports analytics and uptime
* Network-wide content filtering and blocking
* Container deployment and management
* Scalability and future-proofing
* Small physical footprint
* Quiet at idle and under load

Cost-efficiency and energy-efficiency are (luckily) not major concerns for me. While I don't want to spend money egregiously, I am not looking to pinch pennies. Hardware purchases (and software, if necessary) will be funded through surplus scholarship & grant funding made available to me. Additionally, I plan to keep the number of services running on this server relatively low (no huge plans to convert it to a cryptomining rig), so I imagine energy consumption will remain low regardless.

# The Hardware
As having a small physical footprint is one of my main goals, this eliminates any rack-mounted solutions. I live in a relatively cozy apartment where having a server rack (with loud fans) is not entirely viable. I'd like to keep this build quiet and Mini-ITX form factor.

I plan on purchasing off-the-shelf consumer PC hardware and purpose-building it to meet the goals outlined above. [PCPartPicker](https://pcpartpicker.com/) has been instrumental in my previous PC builds in easily determining compatibility between parts. I've outlined some of the key decisions below. The [PCPartPicker list](https://pcpartpicker.com/list/JHkMxs) can be referenced for a full part list.
#### Case - [Fractal Design Node 304](https://www.newegg.com/p/N82E16811352027)
Surprisingly, one of the most important yet easiest decisions to make. This case fits the Mini-ITX form factor requirements and has a modular mounting system supporting up to 6 3.5"/2.5" drives. It has also been praised for its good airflow and ease of building.
#### Motherboard - [MSI MPG B560I Gaming Edge WiFi](https://www.newegg.com/p/N82E16813144460)
This Mini-ITX motherboard has a 2.5G LAN port, integrated WiFi support, 4 SATA 6GB ports, 2 M.2 slots, and a PCIe slot for further expansion (possibly 10G Ethernet or a SATA card for more drives). This was one of a few motherboards that met all these requirements and I've had good experiences with MSI boards in the past.
#### CPU - [Intel Core i7 10700k](https://www.newegg.com/p/N82E16819118123)
This CPU is overkill for just a NAS, but has extra cores that will be useful for my sandboxing/virtualizing needs. It's a couple generations older so it has been more battle-worn and has proven to be useful in this space; I run a 10700k on my main PC and have not had any complaints. One of the major selling points of this processor is that it has support for Intel's Quick Sync technology, making video transcoding much quicker, which is useful for my media server needs.
#### Bulk Storage - [4x Seagate IronWolf Pro 8TB](https://www.newegg.com/p/N82E16822184795)
Seagate's IronWolf Pro series HDDs have been praised for their reliability in NAS systems and server environments. I have opted to go with 4 8TB drives to have a total of 32TB of raw capacity. For reference, my current "server" has a total raw capacity of 8TB and has used about 5TB. 32TB seems like it will be plenty for now, but can always be upgraded in the future with the remaining 2 drive slots.
#### Cache Drives - [2x Samsung 980 Pro 1TB](https://www.newegg.com/p/N82E16820147790)
Not much to say here. The motherboard has 2 M.2 slots so I figured I'd fill them. I'll set these up as cache drives. I don't expect to need more than 2TB raw of cache. I run this drive in my PC and have purchased many of them for work and have had good experiences all around.
#### KVM - [PiKVM v3 Pre-Assembled](https://www.pishop.us/product/pikvm-v3-pre-assembled/)
[PiKVM](https://pikvm.org/) is an open and inexpensive IP-KVM built on Raspberry Pis. While not traditionally a huge part of a server build, the ability to be able to get direct access to the NAS and even edit BIOS settings is of great importance to me. [LTT](https://youtu.be/232opnNPGNo), [Level1Techs](https://youtu.be/LwsznhIBPMc), and [Wolfgang](https://youtu.be/f5jNJDaztqk?t=395) have all given reviews and spoken highly of PiKVM. I have opted to purchase a pre-assembled PiKVM for ease of setup and because of inflated Raspberry Pi prices at the time of purchase. However, since PiKVM is open, it is entirely possible to DIY it with an extra Pi lying around.

---

# The Software
Work in progress...
