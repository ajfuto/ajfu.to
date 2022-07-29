---
title: How to change default Python version
date: "2022-07-27T02:35:59.946Z"
description: "Changing your default versions for Python 2 and 3"
---

### Checking your current Python version

To check your current Python version, run:
```console
python3 --version
```
Alternatively, you can run:
```
python --version
```
In most instances, `python` maps to a Python 2.X installation and `python3` maps to a Python 3.X version (as the name implies).

---

### Changing your default python3 version
To see the Python 3.X versions you have installed, run the following command:
```console
ls /usr/bin/python3*
```
We can use `update-alternatives` to change `python3` to run our desired version.
```console
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.6 1
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.8 2
```
The number at the end of each line is the priority number. We can change the order of the priority through following the instructions after running:
```console
sudo update-alternatives --config python3
```

---

### Changing your default python version
Similarly, we will use `update-alternatives` to change what `python` runs.
We can run the following command to see all of our Python installations:
```console
ls /usr/bin/python*
```
We can follow a similar process as before by assigning Python versions different priorities.
```console
sudo update-alternatives --install /usr/bin/python python /usr/bin/python2.7 1
sudo update-alternatives --install /usr/bin/python python /usr/bin/python3.6 2
```
_Note_: It is highly recommended that you keep `python` pointing to a Python 2.X version rather than a 3.X version. Some operating systems rely on `python` being a Python 2.X version and may break otherwise.
