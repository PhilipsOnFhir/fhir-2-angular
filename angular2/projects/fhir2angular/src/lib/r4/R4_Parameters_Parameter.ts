import { R4_Address } from './R4_Address'
import { R4_Annotation } from './R4_Annotation'
import { R4_Attachment } from './R4_Attachment'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_Coding } from './R4_Coding'
import { R4_ContactDetail } from './R4_ContactDetail'
import { R4_ContactPoint } from './R4_ContactPoint'
import { R4_Contributor } from './R4_Contributor'
import { R4_DataRequirement } from './R4_DataRequirement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Dosage } from './R4_Dosage'
import { R4_Expression } from './R4_Expression'
import { R4_HumanName } from './R4_HumanName'
import { R4_Identifier } from './R4_Identifier'
import { R4_Money } from './R4_Money'
import { R4_ParameterDefinition } from './R4_ParameterDefinition'
import { R4_Period } from './R4_Period'
import { R4_Quantity } from './R4_Quantity'
import { R4_Range } from './R4_Range'
import { R4_Ratio } from './R4_Ratio'
import { R4_Reference } from './R4_Reference'
import { R4_RelatedArtifact } from './R4_RelatedArtifact'
import { R4_SampledData } from './R4_SampledData'
import { R4_Signature } from './R4_Signature'
import { R4_Timing } from './R4_Timing'
import { R4_TriggerDefinition } from './R4_TriggerDefinition'
import { R4_UsageContext } from './R4_UsageContext'

export class R4_Parameters_Parameter      extends R4_BackboneElement
{

   static def : string = 'Parameters_Parameter';
   name : string ;
   valueBase64Binary : string ;
   valueBoolean : boolean ;
   valueCanonical : string ;
   valueCode : string ;
   valueDate : string ;
   valueDateTime : string ;
   valueDecimal : string ;
   valueId : string ;
   valueInstant : string ;
   valueInteger : string ;
   valueMarkdown : string ;
   valueOid : string ;
   valuePositiveInt : string ;
   valueString : string ;
   valueTime : string ;
   valueUnsignedInt : string ;
   valueUri : string ;
   valueUrl : string ;
   valueUuid : string ;
   valueAddress : R4_Address ;
   valueAge : string ;
   valueAnnotation : R4_Annotation ;
   valueAttachment : R4_Attachment ;
   valueCodeableConcept : R4_CodeableConcept ;
   valueCoding : R4_Coding ;
   valueContactPoint : R4_ContactPoint ;
   valueCount : string ;
   valueDistance : string ;
   valueDuration : string ;
   valueHumanName : R4_HumanName ;
   valueIdentifier : R4_Identifier ;
   valueMoney : R4_Money ;
   valuePeriod : R4_Period ;
   valueQuantity : R4_Quantity ;
   valueRange : R4_Range ;
   valueRatio : R4_Ratio ;
   valueReference : R4_Reference ;
   valueSampledData : R4_SampledData ;
   valueSignature : R4_Signature ;
   valueTiming : R4_Timing ;
   valueContactDetail : R4_ContactDetail ;
   valueContributor : R4_Contributor ;
   valueDataRequirement : R4_DataRequirement ;
   valueExpression : R4_Expression ;
   valueParameterDefinition : R4_ParameterDefinition ;
   valueRelatedArtifact : R4_RelatedArtifact ;
   valueTriggerDefinition : R4_TriggerDefinition ;
   valueUsageContext : R4_UsageContext ;
   valueDosage : R4_Dosage ;
   resource : R4_DomainResource ;
   part : R4_Parameters_Parameter [];
}
