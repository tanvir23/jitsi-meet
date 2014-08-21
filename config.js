var config = {
    hosts: {
        domain: 'george.jitsi.net',
        muc: 'conference.george.jitsi.net', // FIXME: use XEP-0030
        bridge: 'jitsi-videobridge.george.jitsi.net' // FIXME: use XEP-0030
    },
//  getroomnode: function (path) { return 'someprefixpossiblybasedonpath'; },
//  useStunTurn: true, // use XEP-0215 to fetch STUN and TURN server
//  useIPv6: true, // ipv6 support. use at your own risk
    useNicks: false,
    bosh: '//george.jitsi.net/http-bind', // FIXME: use xep-0156 for that
    desktopSharing: 'ext', // Desktop sharing method. Can be set to 'ext', 'webrtc' or false to disable.
    chromeExtensionId: 'diibjkoicjeejcmhdnailmkgecihlobk', // Id of desktop streamer Chrome extension
    minChromeExtVersion: '0.1', // Required version of Chrome extension
    enableRtpStats: true, // Enables RTP stats processing
    openSctp: true, // Toggle to enable/disable SCTP channels
//    channelLastN: -1, // The default value of the channel attribute last-n.
//    useRtcpMux: true,
    enableRecording: false
};
