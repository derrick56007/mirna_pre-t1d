FROM r-base

WORKDIR /app

COPY . /app

RUN apt-get update

#RUN apt-get install -y apt-utils

#RUN apt-get install -y libcurl4-openssl-dev

#RUN apt-get install -y libssl-dev

#RUN R -e "install.packages('BiocManager',dependencies=TRUE,repos='http://cran.rstudio.com/')"

#RUN R -e "BiocManager::install('limma')"

#RUN R -e "BiocManager::install('edgeR')"

#RUN R -e "BiocManager::install('Glimma')"

#RUN R -e "install.packages('reshape2',dependencies=TRUE,repos='http://cran.rstudio.com/')"

RUN apt-get install -y python3.7

RUN apt-get install -y python3-pip

RUN ln -s /usr/bin/python3 /usr/bin/python && \
    ln -s /usr/bin/pip3 /usr/bin/pip

RUN pip install -r /app/requirements.txt

##ENTRYPOINT [ "python" ]

ENTRYPOINT ["/bin/bash"]
