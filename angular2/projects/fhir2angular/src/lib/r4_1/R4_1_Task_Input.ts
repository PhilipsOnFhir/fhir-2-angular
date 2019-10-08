import { R4_1_Address } from './R4_1_Address'
import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_Attachment } from './R4_1_Attachment'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_ContactDetail } from './R4_1_ContactDetail'
import { R4_1_ContactPoint } from './R4_1_ContactPoint'
import { R4_1_Contributor } from './R4_1_Contributor'
import { R4_1_DataRequirement } from './R4_1_DataRequirement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Dosage } from './R4_1_Dosage'
import { R4_1_Expression } from './R4_1_Expression'
import { R4_1_HumanName } from './R4_1_HumanName'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Money } from './R4_1_Money'
import { R4_1_ParameterDefinition } from './R4_1_ParameterDefinition'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Range } from './R4_1_Range'
import { R4_1_Ratio } from './R4_1_Ratio'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_RelatedArtifact } from './R4_1_RelatedArtifact'
import { R4_1_SampledData } from './R4_1_SampledData'
import { R4_1_Signature } from './R4_1_Signature'
import { R4_1_Timing } from './R4_1_Timing'
import { R4_1_TriggerDefinition } from './R4_1_TriggerDefinition'
import { R4_1_UsageContext } from './R4_1_UsageContext'

export class R4_1_Task_Input      extends R4_1_BackboneElement
{

   static def : string = 'Task_Input';
   type : R4_1_CodeableConcept ;
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
   valueAddress : R4_1_Address ;
   valueAge : string ;
   valueAnnotation : R4_1_Annotation ;
   valueAttachment : R4_1_Attachment ;
   valueCodeableConcept : R4_1_CodeableConcept ;
   valueCoding : R4_1_Coding ;
   valueContactPoint : R4_1_ContactPoint ;
   valueCount : string ;
   valueDistance : string ;
   valueDuration : string ;
   valueHumanName : R4_1_HumanName ;
   valueIdentifier : R4_1_Identifier ;
   valueMoney : R4_1_Money ;
   valuePeriod : R4_1_Period ;
   valueQuantity : R4_1_Quantity ;
   valueRange : R4_1_Range ;
   valueRatio : R4_1_Ratio ;
   valueReference : R4_1_Reference ;
   valueSampledData : R4_1_SampledData ;
   valueSignature : R4_1_Signature ;
   valueTiming : R4_1_Timing ;
   valueContactDetail : R4_1_ContactDetail ;
   valueContributor : R4_1_Contributor ;
   valueDataRequirement : R4_1_DataRequirement ;
   valueExpression : R4_1_Expression ;
   valueParameterDefinition : R4_1_ParameterDefinition ;
   valueRelatedArtifact : R4_1_RelatedArtifact ;
   valueTriggerDefinition : R4_1_TriggerDefinition ;
   valueUsageContext : R4_1_UsageContext ;
   valueDosage : R4_1_Dosage ;
}
