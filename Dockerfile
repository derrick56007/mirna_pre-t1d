FROM derrick56007/mirna_pre_t1d:base2

WORKDIR /app

COPY . /app

RUN dos2unix src/*

ENTRYPOINT []