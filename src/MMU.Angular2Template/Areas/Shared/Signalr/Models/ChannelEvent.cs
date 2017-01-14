using System;
using Newtonsoft.Json;

namespace MMU.Angular2Template.Areas.Shared.Signalr.Models
{
    public class ChannelEvent
    {
        private object _data;

        public ChannelEvent()
        {
            Timestamp = DateTimeOffset.Now;
        }

        public string ChannelName { get; set; }

        public object Data
        {
            get
            {
                return _data;
            }
            set
            {
                _data = value;
                Json = JsonConvert.SerializeObject(_data);
            }
        }

        public string Json { get; private set; }

        public string Name { get; set; }

        public DateTimeOffset Timestamp { get; set; }
    }
}