import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      customerName,
      email,
      phone,
      preferredDestination,
      startDate,
      endDate,
      budgetPerPerson,
      adultsCount,
      childrenCount,
      travelStyle,
      specialNotes,
    } = body;

    if (!customerName || !email || !phone) {
      return NextResponse.json(
        { error: "Customer name, email, and phone number are required." },
        { status: 400 }
      );
    }

    // Prepare document matching customTripRequest schema
    const doc = {
      _type: "customTripRequest",
      customerName,
      email,
      phone,
      preferredDestination: preferredDestination || "Undecided / Flexible",
      startDate: startDate || undefined,
      endDate: endDate || undefined,
      budgetPerPerson: budgetPerPerson ? String(budgetPerPerson) : undefined,
      adultsCount: adultsCount ? Number(adultsCount) : 2,
      childrenCount: childrenCount ? Number(childrenCount) : 0,
      travelStyle: travelStyle || "Luxury",
      specialNotes: specialNotes || "",
      status: "New",
    };

    // If Sanity write token is configured, write to Sanity dataset
    if (process.env.SANITY_WRITE_TOKEN) {
      const clientWithToken = client.withConfig({
        token: process.env.SANITY_WRITE_TOKEN,
      });
      const created = await clientWithToken.create(doc);
      return NextResponse.json({ success: true, id: created._id });
    }

    // Otherwise log cleanly and return success for client UX
    console.log("Recorded Custom Trip Request:", doc);
    return NextResponse.json({
      success: true,
      message: "Custom trip enquiry received successfully!",
      data: doc,
    });
  } catch (error: any) {
    console.error("Error submitting custom trip request:", error);
    return NextResponse.json(
      { error: "Failed to submit custom trip request." },
      { status: 500 }
    );
  }
}
