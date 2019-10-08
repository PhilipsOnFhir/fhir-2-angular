import { R5_Address } from './R5_Address'
import { R5_Annotation } from './R5_Annotation'
import { R5_Attachment } from './R5_Attachment'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_Coding } from './R5_Coding'
import { R5_ContactDetail } from './R5_ContactDetail'
import { R5_ContactPoint } from './R5_ContactPoint'
import { R5_Contributor } from './R5_Contributor'
import { R5_DataRequirement } from './R5_DataRequirement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Dosage } from './R5_Dosage'
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
import { R5_StructureMapSourceListModeEnum } from './R5_StructureMapSourceListModeEnum'
import { R5_Timing } from './R5_Timing'
import { R5_TriggerDefinition } from './R5_TriggerDefinition'
import { R5_UsageContext } from './R5_UsageContext'

export class R5_StructureMap_Source      extends R5_BackboneElement
{

   static def : string = 'StructureMap_Source';
   context : string ;
   min : string ;
   max : string ;
   type : string ;
   defaultValueBase64Binary : string ;
   defaultValueBoolean : boolean ;
   defaultValueCanonical : string ;
   defaultValueCode : string ;
   defaultValueDate : string ;
   defaultValueDateTime : string ;
   defaultValueDecimal : string ;
   defaultValueId : string ;
   defaultValueInstant : string ;
   defaultValueInteger : string ;
   defaultValueMarkdown : string ;
   defaultValueOid : string ;
   defaultValuePositiveInt : string ;
   defaultValueString : string ;
   defaultValueTime : string ;
   defaultValueUnsignedInt : string ;
   defaultValueUri : string ;
   defaultValueUrl : string ;
   defaultValueUuid : string ;
   defaultValueAddress : R5_Address ;
   defaultValueAge : string ;
   defaultValueAnnotation : R5_Annotation ;
   defaultValueAttachment : R5_Attachment ;
   defaultValueCodeableConcept : R5_CodeableConcept ;
   defaultValueCoding : R5_Coding ;
   defaultValueContactPoint : R5_ContactPoint ;
   defaultValueCount : string ;
   defaultValueDistance : string ;
   defaultValueDuration : string ;
   defaultValueHumanName : R5_HumanName ;
   defaultValueIdentifier : R5_Identifier ;
   defaultValueMoney : R5_Money ;
   defaultValuePeriod : R5_Period ;
   defaultValueQuantity : R5_Quantity ;
   defaultValueRange : R5_Range ;
   defaultValueRatio : R5_Ratio ;
   defaultValueReference : R5_Reference ;
   defaultValueSampledData : R5_SampledData ;
   defaultValueSignature : R5_Signature ;
   defaultValueTiming : R5_Timing ;
   defaultValueContactDetail : R5_ContactDetail ;
   defaultValueContributor : R5_Contributor ;
   defaultValueDataRequirement : R5_DataRequirement ;
   defaultValueExpression : R5_Expression ;
   defaultValueParameterDefinition : R5_ParameterDefinition ;
   defaultValueRelatedArtifact : R5_RelatedArtifact ;
   defaultValueTriggerDefinition : R5_TriggerDefinition ;
   defaultValueUsageContext : R5_UsageContext ;
   defaultValueDosage : R5_Dosage ;
   element : string ;
   listMode : R5_StructureMapSourceListModeEnum ;
   variable : string ;
   condition : string ;
   check : string ;
   logMessage : string ;
}
