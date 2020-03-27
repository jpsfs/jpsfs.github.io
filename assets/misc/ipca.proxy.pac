function FindProxyForURL(url, host) {
 
// First start with the exceptions that need to be proxied
 
if ((dnsDomainIs(host, ".tandfonline.com")) ||	// (dnsDomainIs(host, ".google-analytics.com")) ||	(dnsDomainIs(host, ".webofknowledge.com")) ||	(dnsDomainIs(host, ".aip.org")) ||	(dnsDomainIs(host, ".acs.org")) ||	(dnsDomainIs(host, ".annualreviews.org")) ||	(dnsDomainIs(host, ".acm.org")) ||	(dnsDomainIs(host, ".bepress.com")) ||	(dnsDomainIs(host, ".biome.ac.uk")) ||	(dnsDomainIs(host, ".csa.com")) ||	(dnsDomainIs(host, ".doaj.org")) ||	(dnsDomainIs(host, ".bl.uk")) ||	(dnsDomainIs(host, ".doi.org")) ||	(dnsDomainIs(host, ".epnet.com")) ||	(dnsDomainIs(host, ".ebsco-content.com")) ||	(dnsDomainIs(host, ".ebscohost.com")) ||	(dnsDomainIs(host, ".elsevier.com")) ||	(dnsDomainIs(host, ".highwiere.com")) ||	(dnsDomainIs(host, ".sciverse.com")) ||	(dnsDomainIs(host, ".els-cdn.com")) ||	(dnsDomainIs(host, ".sciencedirect.com")) ||	(dnsDomainIs(host, ".ieeexplore.com")) ||	(dnsDomainIs(host, ".iop.org")) ||	(dnsDomainIs(host, ".isiknowledge.com")) ||	(dnsDomainIs(host, ".loc.gov")) ||	(dnsDomainIs(host, ".siam.org")) ||	(dnsDomainIs(host, ".metapress.com")) ||	(dnsDomainIs(host, ".bn.pt")) ||	(dnsDomainIs(host, ".muse.jhu.edu")) ||	(dnsDomainIs(host, ".nlm.nih.gov")) ||	(dnsDomainIs(host, ".rsc.org")) ||	(dnsDomainIs(host, ".scopus.com")) ||	(dnsDomainIs(host, ".sage.com")) ||	(dnsDomainIs(host, ".springerlink.com")) ||	(dnsDomainIs(host, ".wiley.com")) ||	(dnsDomainIs(host, ".b-on.pt")) ||	(dnsDomainIs(host, ".ieee.org")) ||
	(dnsDomainIs(host, "iportaldoc.ipca.pt")) ||(dnsDomainIs(host, "contacts.ipca.pt")) ||	(dnsDomainIs(host, ".exlibrisgroup.com"))) {
         return "PROXY proxy2.ipca.pt:8080";
}
 
// Default return condition is the proxy, since it’s assumed that everything
// else is on the Internet.
 
return "DIRECT";
 
}
