#!/bin/bash -xe

_IMAGE=""
_REPO_URL=""
_VERSION=""
_WORKDIR=""
_REGION="--region us-east-1"
_PROFILE=""

while getopts 'hw:i:u:v:p:r:' flag; do
  case "${flag}" in
    h)
        echo "build and push new docker image"
        echo " "
        echo "build-docker-image.sh [options]"
        echo " "
        echo "options:"
        echo "-h,            show brief help"
        echo "-w WORKDIR,    specify folder to run build in"
        echo "-i IMAGE_NAME, specify docker image name"
        echo "-u REPO_URL,   specify ECR repository url"
        echo "-v VERSION,    specify image version"
        echo "-r REGION,     specify AWS region to use; will use default if blank"
        echo "-p PROFILE,    specify AWS profile to use; will use default if blank"
        echo " "
        exit 0
    ;;
    w)
        _WORKDIR="${OPTARG}"
    ;;
    i)
        _IMAGE="${OPTARG}"
    ;;
    u)
        _REPO_URL="${OPTARG}"
    ;;
    v)
        _VERSION="${OPTARG}"
    ;;
    r)
        _REGION="--region ${OPTARG}"
    ;;
    p)
        _PROFILE="--profile ${OPTARG}"
    ;;
    *)
    echo "invalid arg."
    exit 1
    ;;
  esac
done

if [ -z $_IMAGE ] || [ -z $_REPO_URL ] || [ -z $_VERSION ] || [ -z $_WORKDIR ]
then
    echo "ERROR: workdir, image, repo, and version parameters are required"
    exit 1
fi

echo _IMAGE : $_IMAGE
echo _REPO_URL : $_REPO_URL
echo _VERSION : $_VERSION
echo _REGION : $_REGION
echo _PROFILE : $_PROFILE

cd ${_WORKDIR}

printf "testing docker status...\n"
docker version
printf "done\n"

printf "building image...\n"
docker build -t ${_IMAGE} .
printf "done\n"

printf "logging into aws ecr...\n"
eval $(aws ecr get-login --no-include-email ${_REGION} ${_PROFILE})
printf "done\n"

printf "tagging image..."
docker tag ${_IMAGE} ${_REPO_URL}/${_IMAGE}:${_VERSION}
printf "done\n"

printf "pushing image...\n"
docker push ${_REPO_URL}/${_IMAGE}:${_VERSION}
printf "done\n"

printf "cleaning up images...\n"
docker rmi -f ${_IMAGE}
docker rmi -f ${_REPO_URL}/${_IMAGE}:${_VERSION}
printf "done\n"

printf "finished.\n"
cd -
exit 0

