import { R5_Address } from './R5_Address'
import { R5_Annotation } from './R5_Annotation'
import { R5_Attachment } from './R5_Attachment'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_Coding } from './R5_Coding'
import { R5_ContactDetail } from './R5_ContactDetail'
import { R5_ContactPoint } from './R5_ContactPoint'
import { R5_Contributor } from './R5_Contributor'
import { R5_DataRequirement } from './R5_DataRequirement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Dosage } from './R5_Dosage'
import { R5_Element } from './R5_Element'
import { R5_Expression } from './R5_Expression'
import { R5_HumanName } from './R5_HumanName'
import { R5_Identifier } from './R5_Identifier'
import { R5_Money } from './R5_Money'
import { R5_ParameterDefinition } from './R5_ParameterDefinition'
import { R5_Period } from './R5_Period'
import { R5_Quantity } from './R5_Quantity'
import { R5_Range } from './R5_Range'
import { R5_Ratio } from './R5_Ratio'
import { R5_Reference } from './R5_Reference'
import { R5_RelatedArtifact } from './R5_RelatedArtifact'
import { R5_SampledData } from './R5_SampledData'
import { R5_Signature } from './R5_Signature'
import { R5_Timing } from './R5_Timing'
import { R5_TriggerDefinition } from './R5_TriggerDefinition'
import { R5_UsageContext } from './R5_UsageContext'

export class R5_Extension      extends R5_Element
{

   static def : string = 'Extension';
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
   valueAddress : R5_Address ;
   valueAge : string ;
   valueAnnotation : R5_Annotation ;
   valueAttachment : R5_Attachment ;
   valueCodeableConcept : R5_CodeableConcept ;
   valueCoding : R5_Coding ;
   valueContactPoint : R5_ContactPoint ;
   valueCount : string ;
   valueDistance : string ;
   valueDuration : string ;
   valueHumanName : R5_HumanName ;
   valueIdentifier : R5_Identifier ;
   valueMoney : R5_Money ;
   valuePeriod : R5_Period ;
   valueQuantity : R5_Quantity ;
   valueRange : R5_Range ;
   valueRatio : R5_Ratio ;
   valueReference : R5_Reference ;
   valueSampledData : R5_SampledData ;
   valueSignature : R5_Signature ;
   valueTiming : R5_Timing ;
   valueContactDetail : R5_ContactDetail ;
   valueContributor : R5_Contributor ;
   valueDataRequirement : R5_DataRequirement ;
   valueExpression : R5_Expression ;
   valueParameterDefinition : R5_ParameterDefinition ;
   valueRelatedArtifact : R5_RelatedArtifact ;
   valueTriggerDefinition : R5_TriggerDefinition ;
   valueUsageContext : R5_UsageContext ;
   valueDosage : R5_Dosage ;
   url : string ;
}
