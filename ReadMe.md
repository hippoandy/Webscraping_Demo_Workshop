# UCDavis CMN189 Seminar - Webscraping (Fall 2019)

## Session: Oct. 15 & Oct. 17, 2019

* Presenter: Andy Ho (Yu-Chang Ho)
* Contact E-mail: [ycaho@ucdavis.edu](ycaho@ucdavis.edu)
* Repo Link: https://github.com/hippoandy/UCDavis_CMN189_F2019_Seminar_Webscraping

### Introduction

This repository contains the coding exercises for performing web-scraping using a very basic example. The practice will mainly focus on the usage of `BeautifulSoup4` library in `Python`.

The seminar `slides` are available as the following links:

* **Session Oct. 15**: [https://slides.com/yuchanghoandy/ucd_cmn189e_fall2019_seminar](https://slides.com/yuchanghoandy/ucd_cmn189e_fall2019_seminar)
* **Session Oct. 17**: [https://slides.com/yuchanghoandy/ucd_cmn189e_fall2019_seminar_p2](https://slides.com/yuchanghoandy/ucd_cmn189e_fall2019_seminar_p2)

Totally 3 fake websites for this practice were implemented. They are available through the following links:

1. A simple Freelancer profile: [https://hipposerver.ddns.net/webscraping/](https://hipposerver.ddns.net/webscraping/)
2. A simple product list: [https://hipposerver.ddns.net/webscraping/v1/](https://hipposerver.ddns.net/webscraping/v1/)
3. A simple product list (ver. 2): [https://hipposerver.ddns.net/webscraping/v1/](https://hipposerver.ddns.net/webscraping/v1/)

Please note that the second version of the product list is not able to be scrape using `BeautifulSoup`, please refer to the slides for session 1 to find the tip for retrieving data.

### Software Requirements

The coding exercises are written in `Python`, an installation of `Python 3.6 or higher` is required. The code files are given in `Jupyter Notebook` format (`.ipynb` files). Please install Jupyter Notebook engine on your computer, or try out the `Anaconda` software package, which is available through [https://www.anaconda.com/distribution/#download-section](https://www.anaconda.com/distribution/#download-section).

### Library Requirements

Several Python libraries are required for this practices. For installation, tried the following commands.

#### Windows

Please open up `CMD` window with administrator's permission and execute either the following command:

```bash
$ pip install beautifulsoup4 pandas numpy
#  or
$ pip3 install beautifulsoup4 pandas numpy
```

#### macOS

Please open up `Terminal` app and execute either the following command:

```bash
$ sudo pip install beautifulsoup4 pandas numpy
#  or
$ sudo pip3 install beautifulsoup4 pandas numpy
```