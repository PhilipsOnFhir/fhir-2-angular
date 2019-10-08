import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_ChargeItemDefinition_Applicability } from './R4_1_ChargeItemDefinition_Applicability'
import { R4_1_ChargeItemDefinition_PriceComponent } from './R4_1_ChargeItemDefinition_PriceComponent'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_ChargeItemDefinition_PropertyGroup      extends R4_1_BackboneElement
{

   static def : string = 'ChargeItemDefinition_PropertyGroup';
   applicability : R4_1_ChargeItemDefinition_Applicability [];
   priceComponent : R4_1_ChargeItemDefinition_PriceComponent [];
}
