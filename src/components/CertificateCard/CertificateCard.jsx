import Image from "next/image";

const CertificateCard = ( {item} ) => {
    return(
        <a
                    href="https://www.credly.com/badges/b5d1e22f-049f-49df-a889-e70b3a5be6f4/linked_in_profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-full flex p-2 border-t border-gray-200 ">
                      <Image
                        src={`${item.img}`} // relative to the public folder
                        alt="Harsh Patel"
                        width={86}
                        height={86}
                        className="pointer-events-none"
                      />
                      <div className="flex flex-col">
                        <span className="p-1">
                          {item.lable}{" "}
                        </span>
                        <span className="p-1 text-gray-500">
                          {item.date}
                        </span>
                      </div>
                    </div>
                  </a>
    )
}

export default CertificateCard