import { DomainResource } from './DomainResource'

export enum FHIRAllTypesEnum{
    ACCOUNT = 'Account',
    ACTIVITYDEFINITION = 'ActivityDefinition',
    ADDRESS = 'Address',
    ADVERSEEVENT = 'AdverseEvent',
    AGE = 'Age',
    ALLERGYINTOLERANCE = 'AllergyIntolerance',
    ANNOTATION = 'Annotation',
    ANY = 'Any',
    APPOINTMENT = 'Appointment',
    APPOINTMENTRESPONSE = 'AppointmentResponse',
    ATTACHMENT = 'Attachment',
    AUDITEVENT = 'AuditEvent',
    BACKBONEELEMENT = 'BackboneElement',
    BASIC = 'Basic',
    BINARY = 'Binary',
    BIOLOGICALLYDERIVEDPRODUCT = 'BiologicallyDerivedProduct',
    BODYSTRUCTURE = 'BodyStructure',
    BUNDLE = 'Bundle',
    CAPABILITYSTATEMENT = 'CapabilityStatement',
    CAREPLAN = 'CarePlan',
    CARETEAM = 'CareTeam',
    CHARGEITEM = 'ChargeItem',
    CHARGEITEMDEFINITION = 'ChargeItemDefinition',
    CLAIM = 'Claim',
    CLAIMRESPONSE = 'ClaimResponse',
    CLINICALIMPRESSION = 'ClinicalImpression',
    CODESYSTEM = 'CodeSystem',
    CODEABLECONCEPT = 'CodeableConcept',
    CODING = 'Coding',
    COMMUNICATION = 'Communication',
    COMMUNICATIONREQUEST = 'CommunicationRequest',
    COMPARTMENTDEFINITION = 'CompartmentDefinition',
    COMPOSITION = 'Composition',
    CONCEPTMAP = 'ConceptMap',
    CONDITION = 'Condition',
    CONSENT = 'Consent',
    CONTACTDETAIL = 'ContactDetail',
    CONTACTPOINT = 'ContactPoint',
    CONTRACT = 'Contract',
    CONTRIBUTOR = 'Contributor',
    COUNT = 'Count',
    COVERAGE = 'Coverage',
    DATAREQUIREMENT = 'DataRequirement',
    DETECTEDISSUE = 'DetectedIssue',
    DEVICE = 'Device',
    DEVICECOMPONENT = 'DeviceComponent',
    DEVICEMETRIC = 'DeviceMetric',
    DEVICEREQUEST = 'DeviceRequest',
    DEVICEUSESTATEMENT = 'DeviceUseStatement',
    DIAGNOSTICREPORT = 'DiagnosticReport',
    DISTANCE = 'Distance',
    DOCUMENTMANIFEST = 'DocumentManifest',
    DOCUMENTREFERENCE = 'DocumentReference',
    DOMAINRESOURCE = 'DomainResource',
    DOSAGE = 'Dosage',
    DURATION = 'Duration',
    ELEMENT = 'Element',
    ELEMENTDEFINITION = 'ElementDefinition',
    ELIGIBILITYREQUEST = 'EligibilityRequest',
    ELIGIBILITYRESPONSE = 'EligibilityResponse',
    ENCOUNTER = 'Encounter',
    ENDPOINT = 'Endpoint',
    ENROLLMENTREQUEST = 'EnrollmentRequest',
    ENROLLMENTRESPONSE = 'EnrollmentResponse',
    ENTRYDEFINITION = 'EntryDefinition',
    EPISODEOFCARE = 'EpisodeOfCare',
    EVENTDEFINITION = 'EventDefinition',
    EXAMPLESCENARIO = 'ExampleScenario',
    EXPANSIONPROFILE = 'ExpansionProfile',
    EXPLANATIONOFBENEFIT = 'ExplanationOfBenefit',
    EXTENSION = 'Extension',
    FAMILYMEMBERHISTORY = 'FamilyMemberHistory',
    FLAG = 'Flag',
    GOAL = 'Goal',
    GRAPHDEFINITION = 'GraphDefinition',
    GROUP = 'Group',
    GUIDANCERESPONSE = 'GuidanceResponse',
    HEALTHCARESERVICE = 'HealthcareService',
    HUMANNAME = 'HumanName',
    IDENTIFIER = 'Identifier',
    IMAGINGSTUDY = 'ImagingStudy',
    IMMUNIZATION = 'Immunization',
    IMMUNIZATIONEVALUATION = 'ImmunizationEvaluation',
    IMMUNIZATIONRECOMMENDATION = 'ImmunizationRecommendation',
    IMPLEMENTATIONGUIDE = 'ImplementationGuide',
    INVOICE = 'Invoice',
    ITEMINSTANCE = 'ItemInstance',
    LIBRARY = 'Library',
    LINKAGE = 'Linkage',
    LIST = 'List',
    LOCATION = 'Location',
    MARKETINGSTATUS = 'MarketingStatus',
    MEASURE = 'Measure',
    MEASUREREPORT = 'MeasureReport',
    MEDIA = 'Media',
    MEDICATION = 'Medication',
    MEDICATIONADMINISTRATION = 'MedicationAdministration',
    MEDICATIONDISPENSE = 'MedicationDispense',
    MEDICATIONKNOWLEDGE = 'MedicationKnowledge',
    MEDICATIONREQUEST = 'MedicationRequest',
    MEDICATIONSTATEMENT = 'MedicationStatement',
    MEDICINALPRODUCT = 'MedicinalProduct',
    MEDICINALPRODUCTAUTHORIZATION = 'MedicinalProductAuthorization',
    MEDICINALPRODUCTCLINICALS = 'MedicinalProductClinicals',
    MEDICINALPRODUCTDEVICESPEC = 'MedicinalProductDeviceSpec',
    MEDICINALPRODUCTINGREDIENT = 'MedicinalProductIngredient',
    MEDICINALPRODUCTPACKAGED = 'MedicinalProductPackaged',
    MEDICINALPRODUCTPHARMACEUTICAL = 'MedicinalProductPharmaceutical',
    MESSAGEDEFINITION = 'MessageDefinition',
    MESSAGEHEADER = 'MessageHeader',
    META = 'Meta',
    MONEY = 'Money',
    MONEYQUANTITY = 'MoneyQuantity',
    NAMINGSYSTEM = 'NamingSystem',
    NARRATIVE = 'Narrative',
    NUTRITIONORDER = 'NutritionOrder',
    OBSERVATION = 'Observation',
    OBSERVATIONDEFINITION = 'ObservationDefinition',
    OCCUPATIONALDATA = 'OccupationalData',
    OPERATIONDEFINITION = 'OperationDefinition',
    OPERATIONOUTCOME = 'OperationOutcome',
    ORGANIZATION = 'Organization',
    ORGANIZATIONROLE = 'OrganizationRole',
    PARAMETERDEFINITION = 'ParameterDefinition',
    PARAMETERS = 'Parameters',
    PATIENT = 'Patient',
    PAYMENTNOTICE = 'PaymentNotice',
    PAYMENTRECONCILIATION = 'PaymentReconciliation',
    PERIOD = 'Period',
    PERSON = 'Person',
    PLANDEFINITION = 'PlanDefinition',
    PRACTITIONER = 'Practitioner',
    PRACTITIONERROLE = 'PractitionerRole',
    PROCEDURE = 'Procedure',
    PROCESSREQUEST = 'ProcessRequest',
    PROCESSRESPONSE = 'ProcessResponse',
    PRODCHARACTERISTIC = 'ProdCharacteristic',
    PRODUCTPLAN = 'ProductPlan',
    PRODUCTSHELFLIFE = 'ProductShelfLife',
    PROVENANCE = 'Provenance',
    QUANTITY = 'Quantity',
    QUESTIONNAIRE = 'Questionnaire',
    QUESTIONNAIRERESPONSE = 'QuestionnaireResponse',
    RANGE = 'Range',
    RATIO = 'Ratio',
    REFERENCE = 'Reference',
    RELATEDARTIFACT = 'RelatedArtifact',
    RELATEDPERSON = 'RelatedPerson',
    REQUESTGROUP = 'RequestGroup',
    RESEARCHSTUDY = 'ResearchStudy',
    RESEARCHSUBJECT = 'ResearchSubject',
    RESOURCE = 'Resource',
    RISKASSESSMENT = 'RiskAssessment',
    SAMPLEDDATA = 'SampledData',
    SCHEDULE = 'Schedule',
    SEARCHPARAMETER = 'SearchParameter',
    SEQUENCE = 'Sequence',
    SERVICEREQUEST = 'ServiceRequest',
    SIGNATURE = 'Signature',
    SIMPLEQUANTITY = 'SimpleQuantity',
    SLOT = 'Slot',
    SPECIMEN = 'Specimen',
    SPECIMENDEFINITION = 'SpecimenDefinition',
    STRUCTUREDEFINITION = 'StructureDefinition',
    STRUCTUREMAP = 'StructureMap',
    SUBSCRIPTION = 'Subscription',
    SUBSTANCE = 'Substance',
    SUBSTANCEAMOUNT = 'SubstanceAmount',
    SUBSTANCEMOIETY = 'SubstanceMoiety',
    SUBSTANCEPOLYMER = 'SubstancePolymer',
    SUBSTANCEREFERENCEINFORMATION = 'SubstanceReferenceInformation',
    SUBSTANCESPECIFICATION = 'SubstanceSpecification',
    SUPPLYDELIVERY = 'SupplyDelivery',
    SUPPLYREQUEST = 'SupplyRequest',
    TASK = 'Task',
    TERMINOLOGYCAPABILITIES = 'TerminologyCapabilities',
    TESTREPORT = 'TestReport',
    TESTSCRIPT = 'TestScript',
    TIMING = 'Timing',
    TRIGGERDEFINITION = 'TriggerDefinition',
    TYPE = 'Type',
    USAGECONTEXT = 'UsageContext',
    USERSESSION = 'UserSession',
    VALUESET = 'ValueSet',
    VERIFICATIONRESULT = 'VerificationResult',
    VISIONPRESCRIPTION = 'VisionPrescription',
    BASE64BINARY = 'base64Binary',
    BOOLEAN = 'boolean',
    CANONICAL = 'canonical',
    CODE = 'code',
    DATE = 'date',
    DATETIME = 'dateTime',
    DECIMAL = 'decimal',
    ID = 'id',
    INSTANT = 'instant',
    INTEGER = 'integer',
    MARKDOWN = 'markdown',
    OID = 'oid',
    POSITIVEINT = 'positiveInt',
    STRING = 'string',
    TIME = 'time',
    UNSIGNEDINT = 'unsignedInt',
    URI = 'uri',
    URL = 'url',
    UUID = 'uuid',
    XHTML = 'xhtml',
}
