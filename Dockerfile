FROM derrick56007/mirna_pre_t1d:base

WORKDIR /

COPY . /

RUN mkdir /data/
RUN mkdir /data/out

RUN dos2unix src/*

RUN chmod -R 777 src/

ENTRYPOINT []
