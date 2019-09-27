import json
import redis
from getcfg import opencfg, cfgredis
import redis
import tweepy
import config
import time

# Get configuracion de Twitter y de Redis
cfg_redis = cfgredis()
redisTweet = redis.StrictRedis(host=cfg_redis['host'], port=cfg_redis['port'], db=cfg_redis['db'], password=cfg_redis['pass'])
twittercfg = opencfg('config.cfg', "tweetgcba")

# Connect a la API de Twitter
auth = tweepy.OAuthHandler(twittercfg.consumer_key, twittercfg.consumer_secret)
api = tweepy.API(auth)

if __name__ == '__main__':
	while True:
		# Get una lista de los tweets
		tweets = api.list_timeline(twittercfg.user, twittercfg.list)
		last_tws = []

		# Parsear los ultimos n tweets y appendear a lista de ultimos tweets
		for x in range(twittercfg.num_tweets):
			text = tweets[x].text.encode('utf8', 'ignore')
			screen_name = tweets[x].user.screen_name.encode('utf8', 'ignore')
			created_at = str(tweets[x].created_at)
			tw = {'text': text, 'screen_name': screen_name, 'created_at': created_at}
			last_tws.append(tw)

		print last_tws	
		# Publicar los ultimos tweets
		redisTweet.publish('ultimos_tweets', json.dumps(last_tws))

		# Dormir lo que defina el intervalo y correr de vuelta
		time.sleep(twittercfg.interval)