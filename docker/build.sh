npm run build
cp -r ../dist ./
docker build -t ccr.ccs.tencentyun.com/yizhixiaocaiji/goim-client:v0.1.4 ./
docker push ccr.ccs.tencentyun.com/yizhixiaocaiji/goim-client:v0.1.4