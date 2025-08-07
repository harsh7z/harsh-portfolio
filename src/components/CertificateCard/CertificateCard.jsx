import Image from "next/image";

const CertificateCard = ( {item} ) => {
    return(
        <a
                    href="https://www.credly.com/badges/b5d1e22f-049f-49df-a889-e70b3a5be6f4/linked_in_profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-full flex p-2 border-t border-neutral-800">
                      <Image
                        src={`${item.img}`} // relative to the public folder
                        alt="Harsh Patel"
                        width={86}
                        height={86}
                        className="pointer-events-none"
                      />
                      <div className="flex flex-col">
                        <span className="p-1 font-semibold lg:font-normal">
                          {item.label}{" "}
                        </span>
                        <span className="p-1 text-neutral-400 text-sm">
                          {item.date}
                        </span>
                      </div>
                    </div>
                  </a>
    )
}

export default CertificateCard