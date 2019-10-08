import { DomainResource } from './DomainResource';

export enum ResourceTypeEnum{
    ACCOUNT = 'Account',
    ACTIVITYDEFINITION = 'ActivityDefinition',
    ADVERSEEVENT = 'AdverseEvent',
    ALLERGYINTOLERANCE = 'AllergyIntolerance',
    APPOINTMENT = 'Appointment',
    APPOINTMENTRESPONSE = 'AppointmentResponse',
    AUDITEVENT = 'AuditEvent',
    BASIC = 'Basic',
    BINARY = 'Binary',
    BODYSITE = 'BodySite',
    BUNDLE = 'Bundle',
    CAPABILITYSTATEMENT = 'CapabilityStatement',
    CAREPLAN = 'CarePlan',
    CARETEAM = 'CareTeam',
    CHARGEITEM = 'ChargeItem',
    CLAIM = 'Claim',
    CLAIMRESPONSE = 'ClaimResponse',
    CLINICALIMPRESSION = 'ClinicalImpression',
    CODESYSTEM = 'CodeSystem',
    COMMUNICATION = 'Communication',
    COMMUNICATIONREQUEST = 'CommunicationRequest',
    COMPARTMENTDEFINITION = 'CompartmentDefinition',
    COMPOSITION = 'Composition',
    CONCEPTMAP = 'ConceptMap',
    CONDITION = 'Condition',
    CONSENT = 'Consent',
    CONTRACT = 'Contract',
    COVERAGE = 'Coverage',
    DATAELEMENT = 'DataElement',
    DETECTEDISSUE = 'DetectedIssue',
    DEVICE = 'Device',
    DEVICECOMPONENT = 'DeviceComponent',
    DEVICEMETRIC = 'DeviceMetric',
    DEVICEREQUEST = 'DeviceRequest',
    DEVICEUSESTATEMENT = 'DeviceUseStatement',
    DIAGNOSTICREPORT = 'DiagnosticReport',
    DOCUMENTMANIFEST = 'DocumentManifest',
    DOCUMENTREFERENCE = 'DocumentReference',
    DOMAINRESOURCE = 'DomainResource',
    ELIGIBILITYREQUEST = 'EligibilityRequest',
    ELIGIBILITYRESPONSE = 'EligibilityResponse',
    ENCOUNTER = 'Encounter',
    ENDPOINT = 'Endpoint',
    ENROLLMENTREQUEST = 'EnrollmentRequest',
    ENROLLMENTRESPONSE = 'EnrollmentResponse',
    EPISODEOFCARE = 'EpisodeOfCare',
    EXPANSIONPROFILE = 'ExpansionProfile',
    EXPLANATIONOFBENEFIT = 'ExplanationOfBenefit',
    FAMILYMEMBERHISTORY = 'FamilyMemberHistory',
    FLAG = 'Flag',
    GOAL = 'Goal',
    GRAPHDEFINITION = 'GraphDefinition',
    GROUP = 'Group',
    GUIDANCERESPONSE = 'GuidanceResponse',
    HEALTHCARESERVICE = 'HealthcareService',
    IMAGINGMANIFEST = 'ImagingManifest',
    IMAGINGSTUDY = 'ImagingStudy',
    IMMUNIZATION = 'Immunization',
    IMMUNIZATIONRECOMMENDATION = 'ImmunizationRecommendation',
    IMPLEMENTATIONGUIDE = 'ImplementationGuide',
    LIBRARY = 'Library',
    LINKAGE = 'Linkage',
    LIST = 'List',
    LOCATION = 'Location',
    MEASURE = 'Measure',
    MEASUREREPORT = 'MeasureReport',
    MEDIA = 'Media',
    MEDICATION = 'Medication',
    MEDICATIONADMINISTRATION = 'MedicationAdministration',
    MEDICATIONDISPENSE = 'MedicationDispense',
    MEDICATIONREQUEST = 'MedicationRequest',
    MEDICATIONSTATEMENT = 'MedicationStatement',
    MESSAGEDEFINITION = 'MessageDefinition',
    MESSAGEHEADER = 'MessageHeader',
    NAMINGSYSTEM = 'NamingSystem',
    NUTRITIONORDER = 'NutritionOrder',
    OBSERVATION = 'Observation',
    OPERATIONDEFINITION = 'OperationDefinition',
    OPERATIONOUTCOME = 'OperationOutcome',
    ORGANIZATION = 'Organization',
    PARAMETERS = 'Parameters',
    PATIENT = 'Patient',
    PAYMENTNOTICE = 'PaymentNotice',
    PAYMENTRECONCILIATION = 'PaymentReconciliation',
    PERSON = 'Person',
    PLANDEFINITION = 'PlanDefinition',
    PRACTITIONER = 'Practitioner',
    PRACTITIONERROLE = 'PractitionerRole',
    PROCEDURE = 'Procedure',
    PROCEDUREREQUEST = 'ProcedureRequest',
    PROCESSREQUEST = 'ProcessRequest',
    PROCESSRESPONSE = 'ProcessResponse',
    PROVENANCE = 'Provenance',
    QUESTIONNAIRE = 'Questionnaire',
    QUESTIONNAIRERESPONSE = 'QuestionnaireResponse',
    REFERRALREQUEST = 'ReferralRequest',
    RELATEDPERSON = 'RelatedPerson',
    REQUESTGROUP = 'RequestGroup',
    RESEARCHSTUDY = 'ResearchStudy',
    RESEARCHSUBJECT = 'ResearchSubject',
    RESOURCE = 'Resource',
    RISKASSESSMENT = 'RiskAssessment',
    SCHEDULE = 'Schedule',
    SEARCHPARAMETER = 'SearchParameter',
    SEQUENCE = 'Sequence',
    SERVICEDEFINITION = 'ServiceDefinition',
    SLOT = 'Slot',
    SPECIMEN = 'Specimen',
    STRUCTUREDEFINITION = 'StructureDefinition',
    STRUCTUREMAP = 'StructureMap',
    SUBSCRIPTION = 'Subscription',
    SUBSTANCE = 'Substance',
    SUPPLYDELIVERY = 'SupplyDelivery',
    SUPPLYREQUEST = 'SupplyRequest',
    TASK = 'Task',
    TESTREPORT = 'TestReport',
    TESTSCRIPT = 'TestScript',
    VALUESET = 'ValueSet',
    VISIONPRESCRIPTION = 'VisionPrescription',
}
