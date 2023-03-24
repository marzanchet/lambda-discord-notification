# lambda-discord-notification
Send AWS notifications using the webhook from discord. This is a code that uses lambda's power to send sns subscriptions to Discord.

# Send this payload to test the notification on Discord

```
{
  "Records": [
    {
      "EventVersion": "1.0",
      "EventSubscriptionArn": "eventsubscriptionarn",
      "EventSource": "aws:sns",
      "Sns": {
        "SignatureVersion": "1",
        "Timestamp": "1970-01-01T00:00:00.000Z",
        "Signature": "EXAMPLE",
        "SigningCertUrl": "EXAMPLE",
        "MessageId": "XXXXXXXXXXXXXXXXXXX",
        "Message": "High CPU Usage: CPU utilization is above the threshold of 80%",
        "MessageAttributes": {
          "Test": {
            "Type": "String",
            "Value": "TestString"
          },
          "TestBinary": {
            "Type": "Binary",
            "Value": "TestBinary"
          }
        },
        "Type": "Notification",
        "UnsubscribeUrl": "EXAMPLE",
        "TopicArn": "topicarn",
        "Subject": "High CPU Usage Alarm"
      }
    }
  ]
}
```
