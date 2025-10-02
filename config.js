// Website Configuration - Edit this file to customize your content
export const siteConfig = {
  // Basic Site Information
  title: "IBU Business Directory",
  tagline: "AI-Powered Local Business Platform",
  description: "Connecting local professionals, businesses and customers; through our AI assistant Mr. IBU, we link you to your customers. Let us increase your business exposure today!",
  
  // Contact Information
  contact: {
    email: "ibudirectory@gmail.com",
    whatsapp: "256749472414",
    website: "https://local-genius-guide.vercel.app/"
  },
  
  // Hero Section
  hero: {
    title: "Connect with Local",
    highlights: ["Professionals", "Businesses"],
    subtitle: "IBU Business Directory is an AI-powered platform that increases exposure for small businesses, technicians, handworkers, and local professionals.",
    description: "The platform is designed to connect people with trusted local services — where local talent meets local needs.",
    features: [
      {
        icon: "📢",
        title: "Promoting what you do",
        description: "Businesses fill in their details and services, and promote exactly how they want to be seen."
      },
      {
        icon: "🔍", 
        title: "Finding what you need",
        description: "Customers are provided with the most accurate and up-to-date information on their needs."
      }
    ]
  },
  
  // YouTube Videos Section
  youtube: {
    title: "Watch How IBU Works",
    subtitle: "Learn more about our platform through these helpful videos",
    videos: [
      {
        id: "bSgszTxdNQ4", // Replace with actual YouTube video IDs
        title: "IBU (Meet the developer)",
        description: "The start of our journey in developing the Information Broker."
      },
      {
        id: "hoe_KhxeeqM", // https://youtu.be/hoe_KhxeeqM
        title: "Customer Guide 1",
        description: "Introduction to the app - IBU"
      },
      {
        id: "rEGBIxQ_Uuc", // https://youtu.be/rEGBIxQ_Uuc
        title: "Customer Guide 2",
        description: "How to list your business with Mr. IBU"
      },
      {
        id: "9LlNOjwac6E", //  https://youtu.be/9LlNOjwac6E
        title: "Customer Guide 3",
        description: "Understanding our verification tiers and how to get verified"
      }
    ]
  },
  
  // Verification Tiers
  verificationTiers: [
    {
      name: "Email Verified",
      badge: "blue.png",
      price: "Automatic & Free",
      description: "Receive your blue verification badge instantly upon signing up and verifying your email address.",
      features: [
        "Basic profile visibility",
        "Email verification badge", 
        "Access to basic features"
      ]
    },
    {
      name: "Phone Verified",
      badge: "green.png", 
      price: "Once-per-year paid verification",
      description: "Get your green verification badge by providing legal documentation via phone or email.",
      features: [
        "All email verified benefits",
        "Phone verification badge",
        "Higher search ranking",
        "Enhanced credibility"
      ]
    },
    {
      name: "Location Verified",
      badge: "black.png",
      price: "Once-per-year paid verification", 
      description: "Receive your black verification badge through in-person verification of your business location and legal documents.",
      features: [
        "All previous benefits",
        "Location verification badge",
        "Premium search placement",
        "Maximum customer trust"
      ]
    },
    {
      name: "Premium Verified",
      badge: "gold.png",
      price: "Subscription-based",
      description: "Get your gold verification badge with all benefits plus guaranteed promotion in searches and business activity confirmation.",
      features: [
        "All verification benefits",
        "Premium gold badge", 
        "Top search priority",
        "Active business confirmation",
        "Featured listings"
      ]
    }
  ],
  
  // Usage Guide
  usageGuide: [
    {
      title: "👤 As a Guest User",
      description: "You can use Mr. IBU as a guest and simply ask our AI assistant what you're looking for. No registration required to search for businesses and professionals in your area.",
      example: "\"plumber in Kitooro\" or \"pizza restaurants in Kasese.\""
    },
    {
      title: "🏢 As a Business Owner", 
      description: "Sign up for a free account and add up to 3 businesses to the directory. Once signed in, go to \"My Business Dashboard\" to manage your listings.",
      steps: [
        "Create your account",
        "Access \"My Business Dashboard\"",
        "Fill in your business details", 
        "Submit and chill"
      ]
    },
    {
      title: "✅ Verification Process",
      description: "After submitting your business details, and incase you decide you want to get verified, go to the \"About Us\" section in the app to communicate with our team. Every business has different verification standards based on the industry and services offered.",
      note: "Our team will guide you through the specific requirements for your business type."
    }
  ],
  
  // App Download
  download: {
    title: "Download Mr. IBU App",
    subtitle: "Get started today with our AI-powered business directory. Available only for Android devices now.",
    apkFile: "Mr. IBU.apk",
    installationSteps: [
      "For Android user we recommend: Download App which will connect you to our server and you can download the app as an apk. Remember to allow installation from other places on your phone. That's the only way you can install an apk. You may be cautioned that the file maybe unsafe, this is normal since you are not donwloading from playstore. Please download, and if asked to scan, allow the scan. ",
      "For ios/iphone users we recommend: Visit Website which will connect you to the website version of the app. Which works the same. With time we shall create an ios app also."
    ]
  }
};
