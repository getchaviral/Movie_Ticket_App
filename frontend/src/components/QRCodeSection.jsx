import { QRCodeCanvas } from 'qrcode.react'

function QRCodeSection({ value }) {
  return (
    <div className="flex justify-end">
      {/* The QR code value is the booking ID, so every ticket can be scanned uniquely. */}
      <QRCodeCanvas size={92} value={value} />
    </div>
  )
}

export default QRCodeSection
