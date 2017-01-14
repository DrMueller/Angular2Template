using System;
using System.Collections.Generic;
using System.Threading;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.AspNetCore.SignalR.Infrastructure;
using MMU.Angular2Template.Areas.Shared.Signalr.Models;
using MMU.Angular2Template.Areas.SignalrFeature.Models;

namespace MMU.Angular2Template.Areas.SignalrFeature.Controllers
{
    [Route("api/[controller]")]
    public class HelloSignalrController
    {
        private const string SIGNALR_CHANNEL_NAME = "HelloSignalrTesting"; // The Channel has to be defined on the Client-Side as well

        private readonly IHubContext _hubContext;

        public HelloSignalrController(IConnectionManager connectionManager)
        {
            _hubContext = connectionManager.GetHubContext<Shared.Signalr.Hubs.ChannelHub>();
        }

        [HttpPost("publishSomeSignalr")]
        public void PublishSomeSignalr()
        {
            for (int i = 0; i <= 100; i++)
            {
                PublishEvent("Test1234", "Hello Signalr: " + i);
                Thread.Sleep(200);
            }
        }

        private void PublishEvent(string eventName, string msg)
        {
            _hubContext.Clients.Group(SIGNALR_CHANNEL_NAME).OnEvent(SIGNALR_CHANNEL_NAME, new ChannelEvent
            {
                ChannelName = SIGNALR_CHANNEL_NAME,
                Name = eventName,
                Data = msg
            });
        }
    }
}