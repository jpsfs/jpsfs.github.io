function FindProxyForURL(url, host) {
 
// First start with the exceptions that need to be proxied
 
if ((dnsDomainIs(host, ".tandfonline.com")) ||
	(dnsDomainIs(host, "iportaldoc.ipca.pt")) ||(dnsDomainIs(host, "contacts.ipca.pt")) ||
         return "PROXY proxy2.ipca.pt:8080";
}
 
// Default return condition is the proxy, since it�s assumed that everything
// else is on the Internet.
 
return "DIRECT";
 
}