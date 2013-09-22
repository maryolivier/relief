# Download the twilio-python library from http://twilio.com/docs/libraries
from twilio.rest import TwilioRestClient
import json
import urllib2
import sys

# http://api.fullcontact.com/v2/person.json?twitter=helpee3333&apiKey=e4703c15b259bb3ax

# Find these values at https://twilio.com/user/account
account_sid = "AC580101dc256a44bca6883ed28c4e9a1e"
auth_token  =   "5e27ff8a04742887587a9637ce4064c5"
client      = TwilioRestClient(account_sid, auth_token)

message = client.messages.create(to    = "+17203848402",#"+3035001709",
                                 from_ = "+17204142093",
                                 body  = "Hello there!")
